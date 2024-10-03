import * as S from "./style";

interface filterProps {
  title: string;
}

const SideFilter = ({ title }: filterProps) => {
  return (
    <S.Container>
      <S.Divider_1 />
      <S.ContentsBox>
        <S.Title>{title}</S.Title>
        <S.Divider_2 />
        <S.FiltersBox>
          <S.Filter>더보기</S.Filter>
          <S.Filter>더보기</S.Filter>
          <S.Filter>더보기</S.Filter>
        </S.FiltersBox>
      </S.ContentsBox>
      <S.BtnBox>
        <S.ResetBtn>
          <S.ResetIcon src={"public/svg/reset-icon.svg"} />
          초기화
        </S.ResetBtn>
        <S.DoneBtn>선택완료</S.DoneBtn>
      </S.BtnBox>
    </S.Container>
  );
};

export default SideFilter;
