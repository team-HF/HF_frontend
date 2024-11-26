import { useEffect, useState } from "react";
import * as S from "./style";
import { TFilter } from "../../../entities/community/filter-data";
import { useAddParam as addParam } from "../../utils/useAddParam";
import { useCommunityStore } from "../../../pages/community/store/community-store";
import { useNavigate } from "react-router-dom";
import { useGetParams as getParams } from "../../utils/useGetParams";

interface filterProps {
  filterData: { name: string; id: TFilter }[];
}

const Filter = ({ filterData }: filterProps) => {
  const navigate = useNavigate();
  const category = getParams("postCategory");
  const { setFilterSelected } = useCommunityStore();
  const [open, setOpen] = useState<boolean>(false);
  const [currentFilter, setCurrentFilter] = useState<string>(
    getParams("fitnessLevel") === "ADVANCED" ? "고수" : "새싹"
  );
  const openFilter = () => setOpen(!open);

  const changeFilter = (filterIndex: number) => {
    setCurrentFilter(filterData[filterIndex].name);
    setFilterSelected(filterData[filterIndex].id);
    const updatedParam = addParam("fitnessLevel", filterData[filterIndex].id);
    navigate(`${location.pathname}?${updatedParam}`);
    setOpen(false);
  };
  useEffect(() => {
    setCurrentFilter("고수");
  }, [category]);
  const filterList = filterData.map((data) => {
    return (
      <S.Filter
        key={`filter_${data.name}`}
        onClick={() => changeFilter(filterData.indexOf(data))}
      >
        {data.name}
      </S.Filter>
    );
  });
  return (
    <S.Container onClick={openFilter}>
      <S.CurrentFilter>{currentFilter}</S.CurrentFilter>
      {open ? (
        <S.ArrowIcon className="arrow-up" src={"/svg/arrow-down.svg"} />
      ) : (
        <S.ArrowIcon src={"/svg/arrow-down.svg"} />
      )}
      {open && <S.FilterList>{filterList}</S.FilterList>}
    </S.Container>
  );
};

export default Filter;
