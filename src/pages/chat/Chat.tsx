/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import * as S from './style';
import ChatHeader from '../../features/chat/ui/ChatHeader';
import { SocketContext } from '../../app/providers/SocketProvider';
import { useGetChatMessages } from '../../features/chat/api/useGetChatMessage';
import { Virtuoso } from 'react-virtuoso';
import ChatWarningMessage from '../../shared/ui/chat-warning-message/ChatWarningMessage';
import { useGetMatchingUserInfo } from '../../features/matching/api/useGetMatchingUserInfo';
import ChatRequestBubble from '../../features/chat/ui/ChatRequestBubble';

// creationTime이 undefined면 빈 문자열로 처리
function parseCreationTime(creationTime: string = ''): Date {
  if (!creationTime) return new Date(0); // 또는 new Date()로 기본값 설정 가능
  const trimmed = creationTime.replace(/(\.\d{3})\d+/, '$1');
  let withZ = trimmed;
  if (!withZ.endsWith('Z')) {
    withZ += 'Z';
  }
  return new Date(withZ);
}

// AMPM 형식으로 시간 변환
function formatAMPM(creationTime: string = ''): string {
  if (!creationTime) return '';
  const date = parseCreationTime(creationTime);
  if (isNaN(date.getTime())) {
    return '';
  }
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  if (hours === 0) hours = 12;
  const mm = minutes < 10 ? `0${minutes}` : minutes;
  return `${ampm} ${hours}:${mm}`;
}

function isSameDay(d1: Date, d2: Date): boolean {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

function formatDateLine(creationTime: string): string {
  const dateObj = parseCreationTime(creationTime);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const dayNames = ['월', '화', '수', '목', '금', '토', '일'];
  const dayOfWeek = dayNames[dateObj.getDay()];
  return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
}

function shouldShowTime(currentMsg: any, nextMsg: any | undefined): boolean {
  if (!nextMsg) return true;
  const sameSender = currentMsg.senderId === nextMsg.senderId;
  const currentDate = parseCreationTime(currentMsg.creationTime || '');
  const nextDate = parseCreationTime(nextMsg.creationTime || '');
  const isSameMinute =
    currentDate.getHours() === nextDate.getHours() &&
    currentDate.getMinutes() === nextDate.getMinutes();
  return !sameSender || !isSameMinute;
}

export function Chat() {
  const location = useLocation();
  const routeState = location.state as { matchingMessage?: any } | undefined;
  const matchingMessageFromRoute = routeState?.matchingMessage;

  const socketContext = useContext(SocketContext);
  if (!socketContext) {
    throw new Error('Socket 연결 실패');
  }
  const { stompClient, isConnected, memberId } = socketContext;
  const { chatRoomId } = useParams();
  const [textInput, setTextInput] = useState('');

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetChatMessages({
    chatroomId: Number(chatRoomId),
    pageSize: 1000,
  });

  const allParticipantIds = data?.pages.flatMap((page) => page.participantIds);
  const matchingUserId = allParticipantIds?.filter((id) => id !== memberId)[0];
  const {
    data: matchingUserInfo,
    isLoading: matchingUserInfoLoading,
    error: matchingUserInfoError,
  } = useGetMatchingUserInfo(matchingUserId);
  const [realTimeMessages, setRealTimeMessages] = useState<any[]>([]);

  const fetchedMessages = useMemo(() => {
    if (!data) return [];
    const allMessages = data.pages.flatMap((page: any) => page.chatMessages);
    return [...allMessages].reverse();
  }, [data]);

  // 기존 메시지 배열과 실시간 메시지를 합침
  const messages = useMemo(() => {
    return [...fetchedMessages, ...realTimeMessages];
  }, [fetchedMessages, realTimeMessages]);

  // Route state의 매칭 메시지가 있다면 메시지 배열에 병합하고, creationTime 기준 정렬
  const mergedMessages = useMemo(() => {
    const arr = [...messages];
    if (matchingMessageFromRoute) {
      if (
        !arr.some(
          (msg) =>
            msg.chatMessageType === 'MATCHING_REQUEST' &&
            msg.creationTime === matchingMessageFromRoute.creationTime
        )
      ) {
        arr.push(matchingMessageFromRoute);
      }
    }
    arr.sort(
      (a, b) =>
        new Date(a.creationTime || 0).getTime() -
        new Date(b.creationTime || 0).getTime()
    );
    return arr;
  }, [messages, matchingMessageFromRoute]);

  useEffect(() => {
    if (!stompClient || !isConnected || !chatRoomId) return;
    const subscription = stompClient.subscribe(
      `/hf/topic/chat/messages/${chatRoomId}`,
      (message: any) => {
        const newMessage = JSON.parse(message.body);
        setRealTimeMessages((prev) => [...prev, newMessage]);
      }
    );
    return () => {
      subscription.unsubscribe();
    };
  }, [stompClient, isConnected, chatRoomId]);

  //메시지 전송
  const publish = () => {
    if (!stompClient || !textInput.trim()) return;
    const messagePayload = {
      senderId: memberId,
      chatMessageType: 'TEXT',
      content: {
        text: textInput,
      },
    };
    stompClient.publish({
      destination: `/hf/app/chat/messages/${chatRoomId}`,
      body: JSON.stringify(messagePayload),
    });
    setTextInput('');
  };

  const sendMatchingResponse = (matchingId: number, accepted: boolean) => {
    if (!stompClient || !chatRoomId) return;
    const payload = {
      senderId: memberId,
      chatMessageType: 'MATCHING_RESPONSE',
      content: {
        matchingResponseType: accepted ? 'ACCEPTED' : 'REJECTED',
        matchingId,
        cancelMessage: null,
      },
    };
    stompClient.publish({
      destination: `/hf/app/chat/messages/${chatRoomId}`,
      body: JSON.stringify(payload),
    });
  };

  if (isLoading || !chatRoomId || matchingUserInfoLoading)
    return <p>Loading...</p>;
  if (error || matchingUserInfoError) return <p>Error</p>;

  return (
    <S.Container>
      <ChatHeader
        chatroomId={chatRoomId}
        matchingUserNickname={matchingUserInfo.nickname}
        matchingUserTier={matchingUserInfo.tier}
        matchingUserId={matchingUserId}
      />
      <S.MessageContainer>
        {mergedMessages.length > 0 ? (
          <Virtuoso
            data={mergedMessages}
            startReached={() => {
              if (hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
              }
            }}
            initialTopMostItemIndex={mergedMessages.length - 1}
            components={{
              Scroller: S.CustomScroller,
            }}
            itemContent={(index, msg) => {
              const prevMsg = mergedMessages[index - 1];
              const isFirstMessage = index === 0;
              let showDateBoundary = false;
              if (isFirstMessage) {
                showDateBoundary = true;
              } else {
                const prevDate = parseCreationTime(prevMsg.creationTime);
                const currDate = parseCreationTime(msg.creationTime);
                if (!isSameDay(prevDate, currDate)) {
                  showDateBoundary = true;
                }
              }
              const isMine = msg.senderId === memberId;
              const nextMsg = mergedMessages[index + 1];
              const showTime = shouldShowTime(msg, nextMsg);
              const formattedTime = formatAMPM(msg.creationTime);

              if (msg.chatMessageType === 'MATCHING_REQUEST') {
                return (
                  <div key={msg.chatMessageId}>
                    {showDateBoundary && (
                      <S.DateLine>
                        {formatDateLine(msg.creationTime)}
                      </S.DateLine>
                    )}
                    <S.MessageWrapper $isMine={isMine}>
                      <S.RowBox $isMine={isMine}>
                        <ChatRequestBubble
                          messagePayload={{
                            chatMessageType: msg.chatMessageType,
                            meetingTime: msg.content.meetingTime,
                            meetingPlace: msg.content.meetingPlace,
                            matchingId: msg.content.matchingId,
                          }}
                          onAccept={sendMatchingResponse}
                          onReject={sendMatchingResponse}
                        />

                        {showTime && (
                          <S.ChatTime $isMine={isMine}>
                            {formattedTime}
                          </S.ChatTime>
                        )}
                      </S.RowBox>
                    </S.MessageWrapper>
                  </div>
                );
              }

              return (
                <div key={msg.chatMessageId}>
                  {showDateBoundary && (
                    <S.DateLine>{formatDateLine(msg.creationTime)}</S.DateLine>
                  )}
                  <S.MessageWrapper $isMine={isMine}>
                    <S.RowBox $isMine={isMine}>
                      {isMine && showTime && (
                        <S.ChatTime $isMine={isMine}>
                          {formattedTime}
                        </S.ChatTime>
                      )}
                      <S.ChatMessage $isMine={isMine}>
                        {msg.content?.text}
                      </S.ChatMessage>
                      {!isMine && showTime && (
                        <S.ChatTime $isMine={isMine}>
                          {formattedTime}
                        </S.ChatTime>
                      )}
                    </S.RowBox>
                  </S.MessageWrapper>
                </div>
              );
            }}
          />
        ) : (
          <ChatWarningMessage />
        )}
      </S.MessageContainer>
      <S.InputWrapper>
        <S.Input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
              publish();
            }
          }}
        />
        <S.SendButton
          onClick={publish}
          src="/svg/send-icon.svg"
          alt="send-button"
        />
      </S.InputWrapper>
    </S.Container>
  );
}
