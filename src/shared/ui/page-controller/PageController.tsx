import { useState } from "react";
import * as S from "./style";

interface ControllerProps {
  totalPage : number
  onClick: (currentPage : number) => void;
}

const PageController = ({totalPage, onClick }: ControllerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const changePage = (selectedPage: number) => {
    setCurrentPage(selectedPage);
    onClick(selectedPage);
  };
  const pageCircles = Array.from({ length: totalPage }, (_, index) => (
    <S.Circle
      key={index + 1}
      $current_page={currentPage}
      value={index + 1}
      onClick={() => {
        changePage(index + 1);
      }}
    />
  ))
  return (
    <S.Container>
      {pageCircles}
    </S.Container>
  );
};

export default PageController;
