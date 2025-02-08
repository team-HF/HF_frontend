import { useNotificationStore } from "../../store/alarm-store";
import AlarmMessage from "../alarm-message/AlarmMessage";
import * as S from "./style";

interface AlarmModalProps {
  closeModal: () => void;
}

const AlarmModal = ({ closeModal }: AlarmModalProps) => {
  const { notifications } = useNotificationStore();

  const alarmList = notifications.length ? (
    notifications.map((alarm) => <AlarmMessage key={alarm.id} alarm={alarm} />)
  ) : (
    <>asdf</>
  );
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
          <S.CategoryTag>매칭</S.CategoryTag>
          <S.CategoryTag>커뮤니티</S.CategoryTag>
          <S.CategoryTag>채팅</S.CategoryTag>
        </S.CategoryContainer>

        <S.MessageContainer>{alarmList}</S.MessageContainer>
      </S.Container>
    </S.AlarmModal>
  );
};

export default AlarmModal;
