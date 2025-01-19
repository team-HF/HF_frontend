import { useEffect, useState } from "react";
import * as S from "./style";
import AlarmModal from "../alarm-modal/AlarmModal";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  backBtn: boolean;
}

const LogoHeader = ({ backBtn }: HeaderProps) => {
  const navigate = useNavigate();

  const [alarmOpen, setAlarmOpen] = useState<boolean>(false);

  useEffect(() => {
    if (alarmOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [alarmOpen]);

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
      </S.IconBtn>
      {alarmOpen && <AlarmModal closeModal={() => setAlarmOpen(false)} />}
    </S.Container>
  );
};

export default LogoHeader;
