/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect } from 'react';
import { SocketContext } from './SocketProvider';

interface SubscriptionProviderProps {
  children: React.ReactNode;
  onNewChatroom: (newChatroomId: number) => void;
}

export function SubscriptionProvider({
  children,
  onNewChatroom,
}: SubscriptionProviderProps) {
  const socketContext = useContext(SocketContext);
  if (!socketContext) {
    throw new Error('Socket연결 실패');
  }

  const { stompClient, isConnected, memberId } = socketContext;

  useEffect(() => {
    if (!stompClient || !isConnected || !memberId) return;

    //채팅 요청 구독
    const chatReqSub = stompClient.subscribe(
      `/hf/user/${memberId}/chat/request`,
      (message: any) => {
        console.log('[SubscriptionProvider] raw STOMP frame:', message);
        console.log('[SubscriptionProvider] message.body:', message.body);
        const data = JSON.parse(message.body);
        console.log('[SubscriptionProvider] parsed payload:', data);
        if (data) {
          onNewChatroom(data.newChatroomId);
        }
      }
    );

    return () => {
      chatReqSub.unsubscribe();
    };
  }, [stompClient, isConnected, memberId, onNewChatroom]);

  return <>{children}</>;
}
