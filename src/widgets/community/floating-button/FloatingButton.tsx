import { useNavigate } from "react-router-dom";
import * as S from "./style";
import useSetRequireModal from "../../../shared/utils/useSetRequireModal";

const FloatingButton = () => {
  const navigate = useNavigate();
  const setRequireModal = useSetRequireModal();

  const moveToRegister = () => {
    setRequireModal(() => navigate("/community/post-register"));
  };

  return (
    <S.Container onClick={moveToRegister}>
      <S.PencilIcon src="/svg/pencil-icon.svg" />
    </S.Container>
  );
};

export default FloatingButton;
