import { useState } from "react";
import * as S from "./style";
import { TFilter } from "../../../entities/community/filter-data";

interface filterProps {
  filterData: { name: TFilter }[];
}

const Filter = ({ filterData }: filterProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentFilter, setCurrentFilter] = useState<string>(
    filterData[0].name
  );
  const openFilter = () => setOpen(!open);
  const changeFilter = (filter: string) => {
    setCurrentFilter(filter);
    setOpen(false);
  };
  const filterList = filterData.map((data) => {
    return (
      <S.Filter
        key={`filter_${data.name}`}
        onClick={() => changeFilter(data.name)}
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
