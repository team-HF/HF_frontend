import { ReactNode, useEffect } from "react";
import * as S from "./style";
import FooterNav from "../footer-nav/FooterNav";
import { useAccountExpiresStore } from "../../store/account-expires-store";
import Alert from "../alert/Alert";
import { useNavigate } from "react-router-dom";
import eventEmitter from "../../utils/useEventEmitter";

type TChildren = {
  isGNB: boolean;
  children: ReactNode;
};

const PageForm = ({ isGNB, children }: TChildren) => {
  const navigate = useNavigate();
  const {
    expiresModalOpen,
    requireModalOpen,
    setExpiresModalOpen,
    setRequireModalOpen,
  } = useAccountExpiresStore();

  const navigateLogin = () => {
    if (expiresModalOpen) setExpiresModalOpen(false);
    if (requireModalOpen) setRequireModalOpen(false);
    navigate("/login");
  };

  useEffect(() => {
    const handleForbidden = () => setExpiresModalOpen(true);

    eventEmitter.addEventListener("forbidden", handleForbidden); 

    return () => {
      eventEmitter.removeEventListener("forbidden", handleForbidden);
    };
  }, []);

  return (
    <S.Container>
      {children}
      {isGNB && <FooterNav />}
      {expiresModalOpen && (
        <Alert
          title="로그인"
          content={[
            "세션이 만료되었습니다.",
            "계속하시려면 다시 로그인하세요.",
          ]}
          cancelBtn={true}
          confirm={navigateLogin}
          cancel={() => navigate("/")}
        />
      )}
      {requireModalOpen && (
        <Alert
          title="로그인"
          content={
            "서비스를 이용하기 위해서는 로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?"
          }
          cancelBtn={true}
          confirm={navigateLogin}
          cancel={() => navigate(-1)}
        />
      )}
    </S.Container>
  );
};

export default PageForm;
