import { Notification } from "../../store/alarm-store";
import {
  COMMUNITY_MAP,
  getCommunityNotificationText,
  getMatchNotificationText,
  TCommunityNotification,
  TMatchNotification,
} from "../../types/notification";
import * as S from "./style";

interface AlarmProps {
  alarm: Notification;
}

const AlarmMessage = ({ alarm }: AlarmProps) => {
  const alarmTitle = (
    alarmType: TCommunityNotification | TMatchNotification
  ) => {
    const isValidAlarmType = alarmType in COMMUNITY_MAP;
    if (isValidAlarmType) {
      return getCommunityNotificationText(alarmType as TCommunityNotification);
    } else {
      return getMatchNotificationText(alarmType as TMatchNotification);
    }
  };

  return (
    <S.Container>
      <S.Time>방금 전</S.Time>
      <S.Box className="align_center gap_8">
        <S.LogoImg src="/svg/logo-image.svg" />
        <S.Box className="column gap_4">
          <S.Title>{alarmTitle(alarm.event.type)}</S.Title>
          <S.Content>{alarm.alarmMessage}</S.Content>
        </S.Box>
      </S.Box>
    </S.Container>
  );
};

export default AlarmMessage;
