import { createContext, useEffect, useState } from 'react';
import { Client, Stomp } from '@stomp/stompjs';

const SocketContext = createContext<{
  stompClient: Client | null;
}>({ stompClient: null });

export function SocketProvider({
  memberId,
  children,
}: {
  memberId: number;
  children: React.ReactNode;
}) {
  const [stompClient, setStompClient] = useState<Client | null>(null);
  useEffect(() => {
    if (!memberId) return;

    const ws = new WebSocket(
      `ws://localhost:8080/hf/portfolio?member-id=${memberId}`
    );
    const client = Stomp.over(ws);

    client.debug = (msg) => console.log(msg);

    client.connect(
      {},
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (frame: any) => {
        console.log('Connected!', frame);
      },
      (error: Error) => {
        console.error('STOMP error:', error);
      }
    );

    setStompClient(client);

    return () => {
      client.disconnect(() => {
        console.log('Disconnected');
      });
    };
  }, [memberId]);

  return (
    <SocketContext.Provider value={{ stompClient }}>
      {children}
    </SocketContext.Provider>
  );
}
