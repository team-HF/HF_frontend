import { ReactNode } from "react";
import * as S from "./style";
import FooterNav from "../footer-nav/FooterNav";
import Footer from "../../footer/Footer";

type TChildren = {
  isGNB: boolean;
  children: ReactNode;
};

const PageForm = ({ isGNB, children }: TChildren) => {
  return (
    <S.Container>
      <S.ChildrenContainer isGNB={isGNB}>{children}</S.ChildrenContainer>
      <Footer isGNB={isGNB} />
      {isGNB && <FooterNav />}
    </S.Container>
  );
};

export default PageForm;
