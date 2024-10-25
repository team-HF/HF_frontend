import * as S from "./style";
import { useState } from "react";
import {
  filterData,
  labelData,
  TLabel,
} from "../../../entities/community/filter-data";
import Filter from "../../../shared/ui/filter/Filter";
import { useGetParams } from "../../../shared/utils/useGetParams";
import { useEffect } from "react";

const FilterBar = () => {
  const currentCategory = useGetParams("postCategory");
  const [currentLabel, setCurrentLabel] = useState(labelData[0].name); // Default to the first label
  const changeLabel = (label: TLabel) => setCurrentLabel(label);
  const LabelList = labelData.map((data) => {
    return (
      <S.LabelBtn
        key={`community_label_${data.name}`}
        checked={data.name === currentLabel}
        onClick={() => changeLabel(data.name)}
      >
        {data.name}
      </S.LabelBtn>
    );
  });

  useEffect(() => {}, [currentCategory]);

  return (
    <S.Container>
      {currentCategory === "POPULAR" ? (
        <S.LabelContainer>{LabelList}</S.LabelContainer>
      ) : (
        <Filter filterData={filterData} />
      )}
    </S.Container>
  );
};

export default FilterBar;
