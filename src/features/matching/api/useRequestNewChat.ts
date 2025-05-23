import { useContext, useCallback } from 'react';
import { SocketContext } from '../../../app/providers/SocketProvider';
import Cookies from 'js-cookie';

interface ChatParticipationRequestDto {
  requesterId: number;
  chatTargetId: number;
}

export function useRequestChat() {
  const socketContext = useContext(SocketContext);
  const accessToken = Cookies.get('access_token');

  if (accessToken && !socketContext) {
    throw new Error('소켓에 연결되어 있지 않습니다.');
  }

  const { stompClient, isConnected } = socketContext || {};

  // 채팅 신청을 STOMP로 전송하는 함수
  const requestChat = useCallback(
    (payload: ChatParticipationRequestDto) => {
      if (!stompClient) {
        return;
      }
      stompClient.publish({
        destination: '/hf/app/chat/request',
        body: JSON.stringify(payload),
      });
    },
    [stompClient]
  );
  return { requestChat, isConnected };
}
