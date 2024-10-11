import { useState } from "react";
import * as S from "./style";

const CommunityHeader = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openMenu = () => setOpen(!open);
  return (
    <S.Container>
      <S.Title>커뮤니티</S.Title>
      <div>
        <S.AlarmIcon src={"/svg/alarm-icon.svg"} />
        {open ? (
          <S.CloseIcon src={"/svg/x-icon.svg"} onClick={openMenu} />
        ) : (
          <S.MenuIcon src={"/svg/hamburger-icon.svg"} onClick={openMenu} />
        )}
      </div>
    </S.Container>
  );
};

export default CommunityHeader;
