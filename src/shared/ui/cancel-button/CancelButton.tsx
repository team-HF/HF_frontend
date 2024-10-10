import * as S from './style';

export default function CancelButton() {
  return (
    <S.Container>
      <S.CancelButtonContainer>
        <S.CancelSVG src="/svg/cancel-icon.svg" alt="cancel-icon" />
      </S.CancelButtonContainer>
    </S.Container>
  );
}
