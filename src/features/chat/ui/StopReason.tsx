import * as S from './stop-reason.style';

export default function StopReason() {
  return (
    <S.ModalContainer>
      <S.Title>중단 사유</S.Title>
      <S.ButtonGroup>
        <S.PurpleButton>예정된 일자에 나오지 않음</S.PurpleButton>
        <S.PurpleButton>기타</S.PurpleButton>
        <S.WhiteButton>취소</S.WhiteButton>
      </S.ButtonGroup>
    </S.ModalContainer>
  );
}
