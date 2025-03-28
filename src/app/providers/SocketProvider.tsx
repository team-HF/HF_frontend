import { createContext, useEffect, useState } from 'react';
import { Client, Stomp } from '@stomp/stompjs';
import { SocketProps } from './socket.interface';

export const SocketContext = createContext<SocketProps | null>(null);

export function SocketProvider({
  memberId,
  children,
}: {
  memberId?: number;
  children: React.ReactNode;
}) {
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  useEffect(() => {
    if (!memberId) return;
    const rawHost = import.meta.env.VITE_WSS_URL;
    const host = rawHost.replace(/^(https?:)?\/\//, '');
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const wsUrl = `${protocol}://${host}/hf/portfolio?member-id=${memberId}`;
    const ws = new WebSocket(wsUrl);
    const client = Stomp.over(ws);

    client.reconnect_delay = 5000;
    client.connect({}, () => {
      setIsConnected(true);
    });
    client.debug = () => {};

    setStompClient(client);

    return () => {
      client.disconnect(() => {
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
