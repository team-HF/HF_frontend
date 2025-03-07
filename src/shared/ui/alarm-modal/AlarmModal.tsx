import { useEffect, useState } from "react";
import { useNotificationStore } from "../../store/alarm-store";
import AlarmMessage from "../alarm-message/AlarmMessage";
import * as S from "./style";
import EmptyList from "../empty-list/EmptyList";
import { COMMUNITY_MAP, MATCH_MAP } from "../../types/notification";

interface AlarmModalProps {
  closeModal: () => void;
}

const AlarmModal = ({ closeModal }: AlarmModalProps) => {
  const { notifications } = useNotificationStore();
  const [filter, setFilter] = useState<string | null>(null);
  const [filteredList, setFIlteredList] = useState(notifications);

  const changeFilter = (value: string) => {
    if (value === filter) {
      setFilter(null);
    } else {
      setFilter(value);
    }
  };

  const alarmList = filteredList.length ? (
    filteredList.map((alarm, idx) => {
      return (
        <AlarmMessage
          key={`${filteredList.length - idx}번째 알림`}
          alarm={alarm}
        />
      );
    })
  ) : (
    <EmptyList isBtn={false}>알림이 없습니다.</EmptyList>
  );

  useEffect(() => {
    if (filter === null) {
      setFIlteredList(notifications);
    } else {
      const filterResult = notifications.filter((alarm) => {
        if (filter === "match") {
          return alarm.event.type in COMMUNITY_MAP;
        } else if (filter === "community") {
          return alarm.event.type in MATCH_MAP;
        } else {
          return;
        }
      });
      setFIlteredList([...filterResult]);
    }
  }, [filter]);

  return (
    <S.AlarmModal>
      <S.Container>
        <S.TitleContainer>
          <S.Title>알림</S.Title>
          <S.IconBtn>
            <S.CloseIcon src="/svg/close-icon.svg" onClick={closeModal} />
          </S.IconBtn>
        </S.TitleContainer>
        <S.CategoryContainer>
          <S.CategoryTag
            $isValidValue={filter === "match"}
            onClick={() => changeFilter("match")}
          >
            매칭
          </S.CategoryTag>
          <S.CategoryTag
            $isValidValue={filter === "community"}
            onClick={() => changeFilter("community")}
          >
            커뮤니티
          </S.CategoryTag>
        </S.CategoryContainer>
        <S.MessageContainer>{alarmList}</S.MessageContainer>
      </S.Container>
    </S.AlarmModal>
  );
};

export default AlarmModal;
