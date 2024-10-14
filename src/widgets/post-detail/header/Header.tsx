import { useNavigate } from "react-router-dom";
import * as S from "./style";

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.BackIcon
        src={"/svg/arrow-down.svg"}
        onClick={() => navigate(-1)}
      />
      <S.Title>커뮤니티</S.Title>
    </S.Container>
  );
};

export default Header;
