import { useEffect, useState } from 'react';
import * as S from './save-list.style';
import { MatchingUserCard } from '../../../entities/my-page/model/matching-user-card.interface';

export default function SaveList() {
  const [users, setUsers] = useState<MatchingUserCard[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/save-users');
      const data: MatchingUserCard[] = await response.json();
      setUsers(data.slice(0, 30));
    };

    fetchUsers();
  }, []);

  console.log('users', users);
  return (
    <S.Container>
      {users.map((user) => (
        <S.ProfileWrapper key={user.id}>
          <S.IconContainer>
            <S.ProfileIcon src={user.profileImage} alt="profile-icon" />
            <S.HeartIcon src="/svg/profile-heart-icon.svg" alt="save-icon" />
          </S.IconContainer>
          <S.TextWrapper>
            <S.ProfileText>{user.nickname}</S.ProfileText>
          </S.TextWrapper>
        </S.ProfileWrapper>
      ))}
    </S.Container>
  );
}
