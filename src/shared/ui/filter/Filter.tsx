import * as S from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddParam as addParam } from "../../utils/useAddParam";

interface FilterProps<T> {
  filterData: { name: string; id: T }[];
  selectedFilter: T;
  setFilter: (option: T) => void;
  paramName: string;
}

const Filter = <T,>({
  filterData,
  selectedFilter,
  setFilter,
  paramName,
}: FilterProps<T>) => {
  const navigate = useNavigate();

  const currentFilter = filterData.filter(
    (item) => item.id === selectedFilter
  )[0].name;
  const [open, setOpen] = useState<boolean>(false);

  const openFilter = () => setOpen(!open);

  const changeFilter = (filterId: T) => {
    setFilter(filterId);
    const updatedParam = addParam(paramName, filterId);
    navigate(`${location.pathname}?${updatedParam}`);
    setOpen(false);
  };

  const filterList = filterData.map((data) => {
    return (
      <S.Filter
        key={`filter_${data.name}`}
        onClick={() => changeFilter(data.id)}
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
