import { Client } from '@stomp/stompjs';

export interface SocketProps {
  stompClient: Client | null;
  isConnected: boolean;
  memberId?: number;
}
