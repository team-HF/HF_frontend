import { useNavigate } from "react-router-dom";
import * as S from "./style";

const FloatingButton = () => {
  const navigate = useNavigate();
  const moveToRegister = () => {
    navigate("/community/post-register");
  };
  return (
    <S.Container onClick={moveToRegister}>
      <S.PencilIcon src="/svg/pencil-icon.svg" />
    </S.Container>
  );
};

export default FloatingButton;
