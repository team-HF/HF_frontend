import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.BackIcon src={"/svg/arrow-down.svg"} onClick={() => navigate(-1)} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Header;
