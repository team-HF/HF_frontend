import { Client } from '@stomp/stompjs';
import { createContext } from 'react';

interface SocketContextProps {
  stompClient: Client | null;
  isConnected: boolean;
  memberId: number;
}

export const SocketContext = createContext<SocketContextProps | null>(null);
