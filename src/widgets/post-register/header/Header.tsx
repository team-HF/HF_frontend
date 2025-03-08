import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();

  const backNavigation = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.BackIcon src={"/svg/arrow-down.svg"} onClick={backNavigation} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Header;
