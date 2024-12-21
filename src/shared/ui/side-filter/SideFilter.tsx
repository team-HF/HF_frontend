import { useEffect, useState } from "react";
import * as S from "./style";
import { TCategoryData } from "../../../pages/post-register/PostRegister";

interface filterProps {
  title: string;
  open: boolean;
  setSideFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterData: TCategoryData[];
  category: TCategoryData | null;
  setCategory: React.Dispatch<React.SetStateAction<TCategoryData | null>>;
}

const SideFilter = ({
  title,
  open,
  setSideFilterOpen,
  filterData,
  category,
  setCategory,
}: filterProps) => {
  const [value, setValue] = useState<TCategoryData | null>(null);
  const resetFilter = () => setValue(null);
  const sideFilterClose = () => {
    if (value) {
      setCategory(value);
      setSideFilterOpen(false);
    }
  };
  const postCategoryList = filterData.map((data) => (
    <S.Filter
      key={`side_filter_${data.name}`}
      checked={value?.name === data.name}
      onClick={() => setValue(data)}
    >
      {data.name}
    </S.Filter>
  ));

  useEffect(() => {
    setValue(category);
  }, [category]);
  
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
