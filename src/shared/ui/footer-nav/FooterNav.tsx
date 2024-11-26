import * as S from "./style";
import chatIcon from "/svg/gnb-chat-icon.svg";
import homeIcon from "/svg/gnb-home-icon.svg";
import profileIcon from "/svg/gnb-profile-icon.svg";
import writeIcon from "/svg/gnb-write-icon.svg";

const icons = [
  { name: "chat", src: chatIcon, path: "/" },
  { name: "home", src: homeIcon, path: "/" },
  { name: "profile", src: profileIcon, path: "/" },
  {
    name: "write",
    src: writeIcon,
    path: "/community?postCategory=ALL&fitnessLevel=ADVANCED",
  },
];

export default function FooterNav() {
  const navButtons = icons.map((item) => (
    <S.NavBtn key={`navBtn_${item.name}`}>
      <S.Icon
        src={item.src}
        alt={`${item.name}_icon`}
        onClick={() => window.location.href = item.path}
      />
    </S.NavBtn>
  ));
  return <S.Container>{navButtons}</S.Container>;
}
