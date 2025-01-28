import { useEffect, useState, FC, ReactNode, useCallback, useRef } from 'react';
import { Client, StompSubscription } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { SocketContext } from './SocketContext';

interface SocketProviderProps {
  memberId: number;
  children: ReactNode;
}

export const SocketProvider: FC<SocketProviderProps> = ({
  memberId,
  children,
}) => {
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const subscriptionsRef = useRef<StompSubscription[]>([]);

  const initializeSocket = useCallback(() => {
    // const socket = new SockJS(
    //   `http://localhost:8080/hf/portfolio?member-id=${memberId}`
    // );
    const socket = `http://localhost:8080/hf/portfolio?member-id=${memberId}`;
    const client = new Client({
      webSocketFactory: () => new SockJS(socket),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      debug: (str) => console.log('STOMP', str),
    });

    client.onConnect = () => {
      console.log('STOMP 연결');
      setIsConnected(true);
      setStompClient(client);
    };

    client.onStompError = (frame) => {
      console.error('STOMP 에러:', frame.headers.message);
      setIsConnected(false);
    };

    client.onDisconnect = () => {
      console.log('STOMP 연결해제');
      setIsConnected(false);
    };

    client.activate();
    return client;
  }, [memberId]);

  // 연결 관리
  useEffect(() => {
    if (!memberId) return;

    const client = initializeSocket();

    return () => {
      if (client?.active) {
        client.deactivate();
        subscriptionsRef.current = [];
      }
    };
  }, [memberId, initializeSocket]);

  const value = {
    stompClient,
    isConnected,
    subscriptions: subscriptionsRef.current,
    memberId,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};
