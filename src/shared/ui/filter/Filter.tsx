import { useState } from "react";
import * as S from "./style";

interface filterProps {
  filterData: { name: string }[];
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
    <>
      <S.Container onClick={openFilter}>
        {open ? (
          <S.ArrowIcon className="arrow-up" src={"public/svg/arrow-down.svg"} />
        ) : (
          <S.ArrowIcon src={"public/svg/arrow-down.svg"} />
        )}
        <S.CurrentFilter>{currentFilter}</S.CurrentFilter>
        {open && <S.FilterList>{filterList}</S.FilterList>}
      </S.Container>
    </>
  );
};

export default Filter;
