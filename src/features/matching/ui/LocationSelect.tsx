import * as S from './schedule-field-style';

export default function LocationSelect() {
  return (
    <S.Container>
      <S.Title>위치</S.Title>
      <S.FieldWrapper>
        <S.FieldInput placeholder="위치를 선택하세요" readOnly />
        <S.Icon src="/svg/location-icon.svg" alt="location" />
      </S.FieldWrapper>
    </S.Container>
  );
}
