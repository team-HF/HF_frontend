import { ReactNode } from "react";
import * as S from "./style";
import FooterNav from "../footer-nav/FooterNav";

type TChildren = {
  isGNB: boolean;
  children: ReactNode;
};

const PageForm = ({ isGNB, children }: TChildren) => {
  return (
    <S.Container>
      {children}
      {isGNB && <FooterNav />}
    </S.Container>
  );
};

export default PageForm;
