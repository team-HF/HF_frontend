import { ReactNode } from "react";
import * as S from "./style";
import FooterNav from "../footer-nav/FooterNav";
import { useAccountExpiresStore } from "../../store/account-expires-store";
import Alert from "../alert/Alert";
import { useNavigate } from "react-router-dom";
import Footer from "../../footer/Footer";

type TChildren = {
  isGNB: boolean;
  children: ReactNode;
};

const PageForm = ({ isGNB, children }: TChildren) => {
  const navigate = useNavigate();
  const { expiresModalOpen, setExpiresModalOpen } = useAccountExpiresStore();

  const navigateLogin = () => {
    if (expiresModalOpen) setExpiresModalOpen(false);
    navigate("/login");
  };

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
    </S.Container>
  );
};

export default PageForm;
