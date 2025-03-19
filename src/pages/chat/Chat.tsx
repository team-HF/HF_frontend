/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import ChatHeader from '../../features/chat/ui/ChatHeader';
import { SocketContext } from '../../app/providers/SocketProvider';
import { useGetChatMessages } from '../../features/chat/api/useGetChatMessage';
import { Virtuoso } from 'react-virtuoso';
import ChatWarningMessage from '../../shared/ui/chat-warning-message/ChatWarningMessage';
import { useGetMatchingUserInfo } from '../../features/matching/api/useGetMatchingUserInfo';

// creationTime 파싱 함수
function parseCreationTime(creationTime: string): Date {
  const trimmed = creationTime.replace(/(\.\d{3})\d+/, '$1');
  let withZ = trimmed;
  if (!withZ.endsWith('Z')) {
    withZ += 'Z';
  }
  return new Date(withZ);
}

// AM/PM 시간 포멧 함수
function formatAMPM(creationTime: string): string {
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

// 두 Date가 같은 날인지 확인
function isSameDay(d1: Date, d2: Date) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

// 날짜를 "YYYY년 M월 D일 (요일)" 형식으로 변환
function formatDateLine(creationTime: string): string {
  const dateObj = parseCreationTime(creationTime);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const dayNames = ['월', '화', '수', '목', '금', '토', '일'];
  const dayOfWeek = dayNames[dateObj.getDay()];
  return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
}

// 시간 표시 함수
function shouldShowTime(currentMsg: any, nextMsg: any | undefined): boolean {
  if (!nextMsg) return true;
  const sameSender = currentMsg.senderId === nextMsg.senderId;
  const currentDate = parseCreationTime(currentMsg.creationTime);
  const nextDate = parseCreationTime(nextMsg.creationTime);
  const isSameMinute =
    currentDate.getHours() === nextDate.getHours() &&
    currentDate.getMinutes() === nextDate.getMinutes();
  return !sameSender || !isSameMinute;
}

export function Chat() {
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

  const messages = useMemo(() => {
    return [...fetchedMessages, ...realTimeMessages];
  }, [fetchedMessages, realTimeMessages]);

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

  // 메시지 전송 함수
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
        {messages.length > 0 ? (
          <Virtuoso
            data={messages}
            startReached={() => {
              if (hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
              }
            }}
            initialTopMostItemIndex={messages.length - 1}
            components={{
              Scroller: S.CustomScroller,
            }}
            itemContent={(index, msg) => {
              const prevMsg = messages[index - 1];
              const isFirstMessage = index === 0;
              let showDateBoundary = false;
              if (isFirstMessage) {
                // 맨 처음 메시지는 무조건 날짜 표시
                showDateBoundary = true;
              } else {
                const prevDate = parseCreationTime(prevMsg.creationTime);
                const currDate = parseCreationTime(msg.creationTime);
                if (!isSameDay(prevDate, currDate)) {
                  showDateBoundary = true;
                }
              }
              const isMine = msg.senderId === memberId;
              const nextMsg = messages[index + 1];
              const showTime = shouldShowTime(msg, nextMsg);
              const formattedTime = formatAMPM(msg.creationTime);

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
