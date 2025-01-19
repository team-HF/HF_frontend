import AlarmMessage from "../alarm-message/AlarmMessage";
import * as S from "./style";

interface AlarmModalProps {
  closeModal: () => void;
}

const AlarmModal = ({ closeModal }: AlarmModalProps) => {
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
        <S.MessageContainer>
          <AlarmMessage />
          <AlarmMessage />
          <AlarmMessage />
          <AlarmMessage />
          <AlarmMessage />
          <AlarmMessage />
          <AlarmMessage />
          <AlarmMessage />
        </S.MessageContainer>
      </S.Container>
    </S.AlarmModal>
  );
};

export default AlarmModal;
