import * as S from "./style";
import { TFilter } from "../../../entities/community/filter-data";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCommunityStore } from "../../../pages/community/store/community-store";
import { useAddParam as addParam } from "../../utils/useAddParam";
import { useGetParams as getParams } from "../../utils/useGetParams";

interface filterProps {
  filterData: { name: string; id: TFilter }[];
}

const Filter = ({ filterData }: filterProps) => {
  const navigate = useNavigate();
  const { filterSelected, setFilterSelected } = useCommunityStore();
  const [open, setOpen] = useState<boolean>(false);

  const openFilter = () => setOpen(!open);

  const changeFilter = (filterIndex: number) => {
    setFilterSelected(filterData[filterIndex].id);
    const updatedParam = addParam("fitnessLevel", filterData[filterIndex].id);
    navigate(`${location.pathname}?${updatedParam}`);
    setOpen(false);
  };

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

  useEffect(() => {
    const fitnessLevel = getParams("fitnessLevel") as TFilter;
    setFilterSelected(fitnessLevel);
  }, []);
  return (
    <S.Container onClick={openFilter}>
      <S.CurrentFilter>
        {filterSelected === "ADVANCED" ? "고수" : "새싹"}
      </S.CurrentFilter>
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
