import * as S from "./style";
import {
  filterData,
  labelData,
  TLabel,
} from "../../../entities/community/filter-data";
import Filter from "../../../shared/ui/filter/Filter";
import { useLocation, useNavigate } from "react-router-dom";
import { useAddParam as addParam } from "../../../shared/utils/useAddParam";
import { useCommunityStore } from "../../../pages/community/store/community-store";

const FilterBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { categorySelected, labelSelected, setLabelSelected } =
    useCommunityStore();

  const changeLabel = (label: TLabel) => {
    setLabelSelected(label);
    const updatedParam = addParam("fitnessLevel", label);
    if (label === "WEEKEND") {
      navigate(`${location.pathname}?postCategory=POPULAR`);
    } else {
      navigate(`${location.pathname}?${updatedParam}`);
    }
  };

  const LabelList = labelData.map((data) => {
    return (
      <S.LabelBtn
        key={`community_label_${data.name}`}
        checked={data.id === labelSelected}
        onClick={() => changeLabel(data.id)}
      >
        {data.name}
      </S.LabelBtn>
    );
  });
  
  return (
    <S.Container>
      {categorySelected === "POPULAR" ? (
        <S.LabelContainer>{LabelList}</S.LabelContainer>
      ) : (
        <Filter filterData={filterData} />
      )}
    </S.Container>
  );
};

export default FilterBar;
