import * as S from './style';

interface ChatConfirmModalProps {
  onConfirm: (value: boolean) => void;
  onCancel: (value: boolean) => void;
}
export default function ChatConfirmModal({
  onConfirm,
  onCancel,
}: ChatConfirmModalProps) {
  return (
    <S.ModalContainer>
      <S.ModalTitle>채팅방을 나가시겠습니까?</S.ModalTitle>
      <S.ModalMessageWrapper>
        <S.ModalMessage>채팅방을 나가면 대화 내용이 삭제됩니다.</S.ModalMessage>
        <S.ModalMessage>채팅방에서 나가시겠습니까?</S.ModalMessage>
      </S.ModalMessageWrapper>
      <S.ButtonWrapper>
        <S.ConfirmButton onClick={() => onConfirm(true)}>확인</S.ConfirmButton>
        <S.CancelButton onClick={() => onCancel(false)}>취소</S.CancelButton>
      </S.ButtonWrapper>
    </S.ModalContainer>
  );
}
