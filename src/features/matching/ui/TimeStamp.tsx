import * as S from './schedule-field-style';

export default function TimeStamp() {
  return (
    <S.Container>
      <S.Title>시간</S.Title>
      <S.FieldWrapper>
        <S.FieldInput placeholder="시간을 선택하세요" readOnly />
        <S.Icon src="/svg/under-arrow-icon.svg" alt="arrow" />
      </S.FieldWrapper>
    </S.Container>
  );
}
