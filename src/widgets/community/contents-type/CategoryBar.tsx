import * as S from "./style";
import {
  categoryData,
  TCategoryId,
} from "../../../entities/community/contents-type-data";
import { useNavigate } from "react-router-dom";
import SearchTabItem from "../../../shared/ui/search-tab-item/SearchTabItem";

interface CategoryBarProps {
  category: TCategoryId;
  setCategory: React.Dispatch<React.SetStateAction<TCategoryId>>;
}

const CategoryBar = ({ category, setCategory }: CategoryBarProps) => {
  const navigate = useNavigate();
  const onClick = (id: TCategoryId) => {
    setCategory(id);
    navigate(`/community?postCategory=${id}`);
  };
  const filterList = categoryData.map((data) => {
    return (
      <SearchTabItem
        key={`community_filer_${data.name}`}
        id={data.id}
        name={data.name}
        currentCategory={category}
        onClick={onClick}
      />
    );
  });
  return <S.Container>{filterList}</S.Container>;
};

export default CategoryBar;
