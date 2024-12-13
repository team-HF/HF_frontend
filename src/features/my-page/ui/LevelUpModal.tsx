import * as S from './level-up-modal';

export default function LevelUpModal() {
  return (
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.Title>고수로 레벨업 하기</S.Title>
        <S.Subtitle>고수로 레벨업 할 준비가 되셨군요!</S.Subtitle>
        <S.Description>
          고수로 레벨업 할 준비가 되었습니다.
          <br />
          고수가 되어서 다양한 혜택을 받아보세요.
        </S.Description>
        <S.Warning>
          <S.WarningIcon>❗</S.WarningIcon> 한 번 고수로 넘어가면 다시 새싹이 될
          수 없습니다.
        </S.Warning>
        <S.ButtonContainer>
          <S.ConfirmButton>확인</S.ConfirmButton>
          <S.CancelButton>취소</S.CancelButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
}
