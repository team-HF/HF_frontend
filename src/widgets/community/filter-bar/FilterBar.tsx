import * as S from "./style";
import Filter from "../../../shared/ui/filter/Filter";
import { useCommunityStore } from "../../../pages/community/store/community-store";
import { useAddParam as addParam } from "../../../shared/utils/useAddParam";
import { useLocation, useNavigate } from "react-router-dom";
import {
  filterData,
  getLabelText,
  LABEL_MAP,
  TLabel,
} from "../../../entities/community/filter-data";

const FilterBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    categorySelected,
    labelSelected,
    setLabelSelected,
    filterSelected,
    setFilterSelected,
  } = useCommunityStore();

  const changeLabel = (label: TLabel) => {
    setLabelSelected(label);
    const updatedParam = addParam("fitnessLevel", label);
    if (label === "WEEKEND") {
      navigate(`${location.pathname}?postCategory=POPULAR`);
    } else {
      navigate(`${location.pathname}?${updatedParam}`);
    }
  };

  const LabelList = Object.keys(LABEL_MAP).map((labelKey) => {
    return (
      <S.LabelBtn
        key={`community_label_${getLabelText(labelKey as TLabel)}`}
        checked={labelKey === labelSelected}
        onClick={() => changeLabel(labelKey as TLabel)}
      >
        {getLabelText(labelKey as TLabel)}
      </S.LabelBtn>
    );
  });

  return (
    <S.Container>
      {categorySelected === "POPULAR" ? (
        <S.LabelContainer>{LabelList}</S.LabelContainer>
      ) : (
        <Filter
          filterData={filterData}
          selectedFilter={filterSelected}
          setFilter={setFilterSelected}
          paramName="fitnessLevel"
        />
      )}
    </S.Container>
  );
};

export default FilterBar;
