import { Notification } from "../../store/alarm-store";
import * as S from "./style";

interface AlarmProps {
  alarm: Notification;
}

const AlarmMessage = ({ alarm }: AlarmProps) => {
  return (
    <S.Container>
      <S.Time>방금 전</S.Time>
      <S.Box className="align_center gap_8">
        <S.LogoImg src="/svg/logo-image.svg" />
        <S.Box className="column gap_4">
          <S.Title>{alarm.title}</S.Title>
          <S.Content>{alarm.message}</S.Content>
        </S.Box>
      </S.Box>
    </S.Container>
  );
};

export default AlarmMessage;
