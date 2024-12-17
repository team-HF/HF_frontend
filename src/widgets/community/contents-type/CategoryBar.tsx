import * as S from "./style";
import {
  categoryData,
  TCategoryId,
} from "../../../entities/community/contents-type-data";
import { useNavigate } from "react-router-dom";
import SearchTabItem from "../../../shared/ui/search-tab-item/SearchTabItem";
import { useCommunityStore } from "../../../pages/community/store/community-store";

const CategoryBar = () => {
  const navigate = useNavigate();
  const {
    categorySelected,
    setCategorySelected,
    setFilterSelected,
    setLabelSelected,
  } = useCommunityStore();
  const onClick = (id: TCategoryId) => {
    setCategorySelected(id);
    if (id === "POPULAR") {
      setLabelSelected("WEEKEND");
      navigate(`/community?postCategory=${id}`);
    } else {
      setFilterSelected("ADVANCED");
      navigate(`/community?postCategory=${id}&fitnessLevel=ADVANCED`);
    }
  };
  const filterList = categoryData.map((data) => (
    <SearchTabItem
      key={`community_filer_${data.name}`}
      id={data.id}
      name={data.name}
      currentCategory={categorySelected}
      onClick={onClick}
    />
  ));
  return <S.Container>{filterList}</S.Container>;
};

export default CategoryBar;
