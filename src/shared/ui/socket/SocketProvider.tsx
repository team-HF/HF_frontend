import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { SocketContext } from './SocketContext';
import { useGetMyData } from '../../api/useGetMyData';

interface SocketProviderProps {
  children: React.ReactNode;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [stompClient, setStompClient] = useState<CompatClient | null>(null);
  const { data: myData } = useGetMyData();
  const memberId = myData?.memberId;
  useEffect(() => {
    if (!myData) return;
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
      });
    });

    return () => {
      if (client && client.connected) {
        client.disconnect(() => console.log('STOMP 연결 해제'));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memberId]);

  return (
    <SocketContext.Provider value={{ stompClient }}>
      {children}
    </SocketContext.Provider>
  );
};
