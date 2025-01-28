/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect } from 'react';
import { SocketContext } from './SocketContext';

export const useSocketContext = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('프로바이더 안에서 사용해야 합니다.');
  }
  return context;
};

export const useSocketSubscription = (
  topic: string,
  callback: (message: any) => void
) => {
  const { stompClient, isConnected } = useSocketContext();

  useEffect(() => {
    if (!isConnected || !stompClient) return;

    const subscription = stompClient.subscribe(topic, (message: any) => {
      callback(JSON.parse(message.body));
    });

    return () => subscription.unsubscribe();
  }, [stompClient, isConnected, topic, callback]);
};

// 메시지 전송 훅
export const useSocketSend = () => {
  const { stompClient, isConnected } = useSocketContext();

  const sendMessage = (destination: string, body: Record<string, unknown>) => {
    if (!isConnected || !stompClient) {
      console.error('WebSocket 연결되지 않음');
      return;
    }
    stompClient.publish({ destination, body: JSON.stringify(body) });
  };

  return { sendMessage };
};
