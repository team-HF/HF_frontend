/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import ChatHeader from '../../features/chat/ui/ChatHeader';
import { SocketContext } from '../../app/providers/SocketProvider';
import { useGetChatMessages } from '../../features/chat/api/useGetChatMessage';

export function Chat() {
  const socketContext = useContext(SocketContext);
  if (!socketContext) {
    throw new Error('Socket 연결 실패');
  }
  const { stompClient, isConnected, memberId } = socketContext;
  const { chatRoomId } = useParams();
  const [textInput, setTextInput] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

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

  const publish = () => {
    if (!stompClient) return;

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
  if (error) return <p>error</p>;

  return (
    <S.Container>
      <ChatHeader />
      <div style={{ border: '1px solid gray', height: 200, overflow: 'auto' }}>
        {messages.map((msg, idx) => (
          <p key={idx}>{msg.content?.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button onClick={publish}>전송</button>
    </S.Container>
  );
}
