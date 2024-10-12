import * as S from "./style";
import { useState } from "react";
import { filterType } from "../../../entities/community/contents-type-data";
import {
  filterData,
  LabelNameType,
} from "../../../entities/community/filter-data";
import Filter from "../../../shared/ui/filter/Filter";

interface filterBarProps {
  filterType: filterType;
}

const FilterBar = ({ filterType }: filterBarProps) => {
  const [currentLabel, setCurrentLabel] = useState(filterData[0].name);
  const changeLabel = (label: LabelNameType) => setCurrentLabel(label);
  const FilterList = filterData.map((data) => {
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
  return (
    <S.Container>
      {filterType === "dropdown" ? (
        <Filter filterData={filterData} />
      ) : (
        <S.LabelContainer>{FilterList}</S.LabelContainer>
      )}
    </S.Container>
  );
};

export default FilterBar;
