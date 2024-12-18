import { useState } from "react";
import { TCategory } from "../../../entities/community/filter-data";
import * as S from "./style";

interface filterProps {
  title: string;
  open: boolean;
  setSideFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterData: { name: TCategory }[];
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SideFilter = ({
  title,
  open,
  setSideFilterOpen,
  filterData,
  setCategory,
}: filterProps) => {
  const [value, setValue] = useState("");
  const resetFilter = () => setValue("");
  const sideFilterClose = () => {
    setCategory(value);
    setSideFilterOpen(false);
  };
  const postCategoryList = filterData.map((data) => (
    <S.Filter
      key={`side_filter_${data.name}`}
      checked={value === data.name}
      onClick={() => setValue(data.name)}
    >
      {data.name}
    </S.Filter>
  ));
  return open ? (
    <S.Container open={open}>
      <S.Divider_1 />
      <S.ContentsBox>
        <S.Title>{title}</S.Title>
        <S.FiltersBox>{postCategoryList}</S.FiltersBox>
      </S.ContentsBox>
      <S.BtnBox>
        <S.ResetBtnContainer>
          <img src={"/svg/reset-icon.svg"} />
          <S.ResetText onClick={resetFilter}>초기화</S.ResetText>
        </S.ResetBtnContainer>
        <S.DoneBtn onClick={sideFilterClose}>선택완료</S.DoneBtn>
      </S.BtnBox>
    </S.Container>
  ) : null;
};

export default SideFilter;
