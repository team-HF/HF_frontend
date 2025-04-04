import { createContext, useEffect, useState } from 'react';
import { Client, Stomp } from '@stomp/stompjs';
import { SocketProps } from './socket.interface';
import { useMyProfileStore } from '../../shared/store/my-profile-store';

export const SocketContext = createContext<SocketProps | null>(null);

export function SocketProvider({
  children,
}: {
  memberId?: number;
  children: React.ReactNode;
}) {
  const myProfile = useMyProfileStore();
  const memberId = myProfile?.myProfile?.memberId;
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  useEffect(() => {
    if (!memberId) return;
    const wsUrl = `wss://api.healthfriend.site/hf/portfolio?member-id=${memberId}`;
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
