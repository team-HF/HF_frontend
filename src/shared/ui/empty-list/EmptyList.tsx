import { ReactNode } from "react";
import * as S from "./style";
import MinButton from "../min-button/MinButton";

interface EmptyListProps {
  children: ReactNode;
  isBtn: boolean;
  btnName?: string;
}

const EmptyList = ({ children, isBtn, btnName }: EmptyListProps) => {
  return (
    <S.Container>
      <S.Description>{children}</S.Description>
      {isBtn && (
        <MinButton
          name={btnName}
          button_shape="around"
          button_style="style_1"
        />
      )}
    </S.Container>
  );
};

export default EmptyList;
