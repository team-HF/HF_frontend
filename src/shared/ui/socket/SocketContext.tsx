import { createContext } from 'react';
import { CompatClient } from '@stomp/stompjs';

interface SocketContextType {
  stompClient: CompatClient | null;
}

export const SocketContext = createContext<SocketContextType>({
  stompClient: null,
});
