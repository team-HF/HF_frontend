import { useContext, useEffect } from 'react';
import { useGetMyData } from '../../../shared/api/useGetMyData';
import MinButton from '../../../shared/ui/min-button/MinButton';
import { SocketContext } from '../../../shared/ui/socket/SocketContext';

export default function MatchingButton() {
  const { stompClient } = useContext(SocketContext);
  const { data: myData } = useGetMyData();
  useEffect(() => {
    console.log(stompClient);
  }, [stompClient]);
  const handleMatchingClick = () => {
    console.log('click');
    if (stompClient && stompClient.connected) {
      console.log(stompClient);
      const requesterId = myData?.loginId; //  로그인 사용자 ID
      const chatTargetId = 200; // 매칭 대상 사용자 ID

      const payload = { requesterId, chatTargetId };
      stompClient.send('/hf/app/chat/request', {}, JSON.stringify(payload));
      console.log('매칭 요청 전송:', payload);
    } else {
      console.error('STOMP 클라이언트가 연결되지 않았습니다.');
    }
  };

  return (
    <MinButton
      button_shape="semi-around"
      button_style="style_4"
      name="요청"
      onClick={handleMatchingClick}
    />
  );
}
