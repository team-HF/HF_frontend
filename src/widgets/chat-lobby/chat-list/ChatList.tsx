import * as S from './style';
import { MatchingUserCard } from '../../../entities/my-page/model/matching-user-card.interface';
import { useState, useEffect } from 'react';
import OnGoingMatchCard from '../card/OnGoingMatchCard';

export default function ChatList() {
  const [users, setUsers] = useState<MatchingUserCard[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/save-users');
      const data: MatchingUserCard[] = await response.json();
      setUsers(data.slice(0, 10));
    };

    fetchUsers();
  }, []);
  return (
    <S.Container>
      {users.map((user) => (
        <S.ListWrapper key={user.id}>
          <S.MainWrapper>
            <S.InfoWrapper>
              <S.ProfileImageWrapper>
                <S.ProfileImage src={user.profileImage} alt="profile-icon" />
              </S.ProfileImageWrapper>
              <S.TextWrapper>
                <S.StyledNickname>{user.nickname}</S.StyledNickname>
                <S.StyledLocation>{user.location}</S.StyledLocation>
              </S.TextWrapper>
            </S.InfoWrapper>
            <S.ChatDescriptionWrapper>
              <S.StyledChat>안녕하세요.</S.StyledChat>
            </S.ChatDescriptionWrapper>
          </S.MainWrapper>
          <S.SubWrapper>
            <S.StyledTimeStamp>N분전</S.StyledTimeStamp>
            <OnGoingMatchCard />
          </S.SubWrapper>
        </S.ListWrapper>
      ))}
    </S.Container>
  );
}
