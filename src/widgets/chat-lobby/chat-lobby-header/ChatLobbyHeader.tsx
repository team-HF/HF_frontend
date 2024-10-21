import * as S from './style';

export default function ChatLobbyHeader() {
  return (
    <S.Container>
      <S.HeaderText>채팅</S.HeaderText>
      <S.IconWrapper>
        <S.FilterIcon
          src="/svg/filter-icon.svg"
          alt="filter-icon"
        ></S.FilterIcon>
        <S.BellIcon
          src="/svg/notifications-icon.svg"
          alt="notifications-icon"
        ></S.BellIcon>
      </S.IconWrapper>
    </S.Container>
  );
}
