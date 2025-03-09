import { Notification } from "../../store/alarm-store";
import {
  COMMUNITY_MAP,
  getCommunityNotificationText,
  getMatchNotificationText,
  TCommunityNotification,
  TMatchNotification,
} from "../../types/notification";
import { useGetDate as getDate } from "../../utils/useGetDate";
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
      <S.Time>{getDate(alarm.time || "")}</S.Time>
      <S.Box className="align_center gap_8">
        <S.LogoImg src="/svg/logo-image.svg" />
        <S.Box className="column gap_4">
          <S.Title>{alarmTitle(alarm.type)}</S.Title>
          <S.Content>{alarm.message}</S.Content>
        </S.Box>
      </S.Box>
    </S.Container>
  );
};

export default AlarmMessage;
