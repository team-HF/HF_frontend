import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { SocketContext } from './SocketContext';

interface SocketProviderProps {
  memberId: number;
  children: React.ReactNode;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({
  memberId,
  children,
}) => {
  const [stompClient, setStompClient] = useState<CompatClient | null>(null);

  useEffect(() => {
    const socket = new SockJS(
      `http://localhost:8080/hf/portfolio?member-id=${memberId}`
    );
    const client = Stomp.over(socket);

    client.connect({}, () => {
      console.log('STOMP 연결 성공');
      setStompClient(client);

      // 채팅 신청 수신 구독 설정
      client.subscribe(`/hf/user/${memberId}/chat/request`, (response) => {
        const data = JSON.parse(response.body);
        console.log('채팅 신청 수신:', data);
        // 새로운 채팅방 ID 등 처리 (예: 페이지 이동 로직 포함 가능)
      });
    });

    return () => {
      if (client && client.connected) {
        client.disconnect(() => console.log('STOMP 연결 해제'));
      }
    };
  }, [memberId]);

  return (
    <SocketContext.Provider value={{ stompClient }}>
      {children}
    </SocketContext.Provider>
  );
};
