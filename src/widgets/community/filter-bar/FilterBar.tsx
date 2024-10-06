import * as S from "./style";
import { filterType } from "../../../entities/community/contents-type-data";
import { filterData } from "../../../entities/community/filter-data";
import Filter from "../../../shared/ui/filter/Filter";

interface filterBarProps {
  filterType: filterType;
}

const FilterBar = ({ filterType }: filterBarProps) => {
  const FilterList = filterData.map(() => {
    return <></>;
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
