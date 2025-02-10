/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import ChatHeader from '../../features/chat/ui/ChatHeader';
import { SocketContext } from '../../app/providers/SocketProvider';
import { useGetChatMessages } from '../../features/chat/api/useGetChatMessage';

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

// 시간 표시 함수
function shouldShowTime(currentMsg: any, nextMsg: any | undefined): boolean {
  if (!nextMsg) return true;

  const sameSender = currentMsg.senderId === nextMsg.senderId;

  const currentDate = parseCreationTime(currentMsg.creationTime);
  const nextDate = parseCreationTime(nextMsg.creationTime);

  const isSameMinute =
    currentDate.getHours() === nextDate.getHours() &&
    currentDate.getMinutes() === nextDate.getMinutes();

  // 다음 메시지와 보낸 사람 다르거나
  // 시간이 달라지면
  // 시간 표시
  if (!sameSender || !isSameMinute) return true;

  return false;
}

export function Chat() {
  const socketContext = useContext(SocketContext);
  if (!socketContext) {
    throw new Error('Socket 연결 실패');
  }
  const { stompClient, isConnected, memberId } = socketContext;
  const { chatRoomId } = useParams();
  const [textInput, setTextInput] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  console.log(textInput);
  const {
    data: initialMessages,
    isLoading,
    error,
  } = useGetChatMessages({
    chatroomId: Number(chatRoomId),
    page: 1,
    pageSize: 50,
  });

  useEffect(() => {
    if (initialMessages) {
      setMessages(initialMessages.chatMessages);
    }
  }, [initialMessages]);

  // 실시간 메시지 구독
  useEffect(() => {
    if (!stompClient || !isConnected || !chatRoomId) return;

    const subscription = stompClient.subscribe(
      `/hf/topic/chat/messages/${chatRoomId}`,
      (message: any) => {
        const newMessage = JSON.parse(message.body);
        setMessages((prev) => [...prev, newMessage]);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [stompClient, isConnected, chatRoomId]);

  // 메시지 전송
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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <S.Container>
      <ChatHeader />

      <S.MessageContainer>
        {messages.map((msg, idx) => {
          const isMine = msg.senderId === memberId;
          const nextMsg = messages[idx + 1];
          const showTime = shouldShowTime(msg, nextMsg);
          const formattedTime = formatAMPM(msg.creationTime);
          return (
            <S.MessageWrapper key={msg.chatMessageId} $isMine={isMine}>
              <S.RowBox $isMine={isMine}>
                {isMine && showTime && (
                  <S.ChatTime $isMine={isMine}>{formattedTime}</S.ChatTime>
                )}

                <S.ChatMessage $isMine={isMine}>
                  {msg.content?.text}
                </S.ChatMessage>

                {!isMine && showTime && (
                  <S.ChatTime $isMine={isMine}>{formattedTime}</S.ChatTime>
                )}
              </S.RowBox>
            </S.MessageWrapper>
          );
        })}
      </S.MessageContainer>

      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          style={{ flex: 1 }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              publish();
            }
          }}
        />
        <button onClick={publish}>전송</button>
      </div>
    </S.Container>
  );
}
