import * as S from './stop-matching-room.style';

interface StopMatchingRoomProps {
  onConfirm: (value: boolean) => void;
  onCancel: (value: boolean) => void;
}
export default function StopMatchingRoom({
  onConfirm,
  onCancel,
}: StopMatchingRoomProps) {
  return (
    <S.ModalContainer>
      <S.ModalTitle>매칭 중단을 신청하시겠어요?</S.ModalTitle>
      <S.ModalMessageWrapper>
        <S.ModalMessage>상대가 약속시간에 나오지 않았거나,</S.ModalMessage>
        <S.ModalMessage>불발된 경우에만 매칭 중단이 가능해요!</S.ModalMessage>
      </S.ModalMessageWrapper>
      <S.ButtonWrapper>
        <S.ConfirmButton onClick={() => onConfirm(true)}>확인</S.ConfirmButton>
        <S.CancelButton onClick={() => onCancel(false)}>취소</S.CancelButton>
      </S.ButtonWrapper>
    </S.ModalContainer>
  );
}
