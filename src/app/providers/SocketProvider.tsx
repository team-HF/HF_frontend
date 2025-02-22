import { createContext, useEffect, useState } from 'react';
import { Client, Stomp } from '@stomp/stompjs';
import { SocketProps } from './socket.interface';

export const SocketContext = createContext<SocketProps | null>(null);

export function SocketProvider({
  memberId,
  children,
}: {
  memberId: number;
  children: React.ReactNode;
}) {
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  useEffect(() => {
    if (!memberId) return;
    const ws = new WebSocket(
      `ws://localhost:8080/hf/portfolio?member-id=${memberId}`
    );
    const client = Stomp.over(ws);

    client.reconnect_delay = 5000;
    client.connect(
      {},
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (frame: any) => {
        console.log('Connected!', frame);
        setIsConnected(true);
      },
      (error: Error) => {
        console.error('STOMP error:', error);
      }
    );

    setStompClient(client);

    return () => {
      client.disconnect(() => {
        console.log('Disconnected');
        setIsConnected(false);
      });
    };
  }, [memberId]);

  return (
    <SocketContext.Provider value={{ stompClient, isConnected, memberId }}>
      {children}
    </SocketContext.Provider>
  );
}
