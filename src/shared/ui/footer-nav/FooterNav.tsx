import * as S from "./style";
import chatIcon from "/svg/gnb-chat-icon.svg";
import homeIcon from "/svg/gnb-home-icon.svg";
import profileIcon from "/svg/gnb-profile-icon.svg";
import writeIcon from "/svg/gnb-write-icon.svg";

const icons = [
  { name: "chat", src: chatIcon },
  { name: "home", src: homeIcon },
  { name: "profile", src: profileIcon },
  { name: "write", src: writeIcon },
];

export default function FooterNav() {
  const navButtons = icons.map((item) => (
    <S.NavBtn key={`navBtn_${item.name}`}>
      <S.Icon src={item.src} alt={`${item.name}_icon`} />
    </S.NavBtn>
  ));
  return <S.Container>{navButtons}</S.Container>;
}
