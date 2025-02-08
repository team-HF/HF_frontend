import { useEffect, useState } from "react";
import * as S from "./style";
import AlarmModal from "../alarm-modal/AlarmModal";
import { useNavigate } from "react-router-dom";
import { useNotificationStore } from "../../store/alarm-store";

interface HeaderProps {
  backBtn: boolean;
}

const LogoHeader = ({ backBtn }: HeaderProps) => {
  const navigate = useNavigate();

  const { hasNewNotification, markAsRead } = useNotificationStore();

  const [alarmOpen, setAlarmOpen] = useState<boolean>(false);

  useEffect(() => {
    if (alarmOpen) {
      document.body.style.overflow = "hidden";
      markAsRead();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [alarmOpen]);

  useEffect(() => {
    const memberId = 1;
    const eventSource = new EventSource(
      `http://localhost:8080/hf/connect/sse?memberId=${memberId}`
    );

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // useNotificationStore.getState().addNotification(data);
      console.log("Received data: ", data);
      console.log(event.lastEventId);
      if (event.lastEventId) {
        localStorage.setItem("LastEventId", event.lastEventId);
      }
    };

    eventSource.addEventListener("new_thread", () => {
      console.log("알림이 왔어용!");
    });

    eventSource.onerror = () => {
      eventSource.close(); //연결 끊기
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <S.Container>
      <S.Box_1>
        {backBtn && (
          <S.IconBtn onClick={() => navigate(-1)}>
            <S.ArrowImg src={"/svg/arrow-down.svg"} />
          </S.IconBtn>
        )}
        <S.LogoBox>
          <S.Logo className="highlight">H</S.Logo>
          <S.Logo>ealth</S.Logo>
          <S.Logo className="highlight">F</S.Logo>
          <S.Logo>riend</S.Logo>
        </S.LogoBox>
      </S.Box_1>
      <S.IconBtn onClick={() => setAlarmOpen(true)}>
        <S.AlarmImg src={"/svg/alarm-icon.svg"} />
        {/* {hasNewNotification && <S.NewAlarmIndicator />} */}
      </S.IconBtn>
      {alarmOpen && <AlarmModal closeModal={() => setAlarmOpen(false)} />}
    </S.Container>
  );
};

export default LogoHeader;
