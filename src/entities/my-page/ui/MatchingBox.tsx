import * as s from './matching-box.style';
import Hashtag from '../../../shared/ui/hashtag/Hashtag';
import { useEffect, useState, useCallback } from 'react';
import { MatchingUserCard } from '../model/matching-user-card.interface';
import MediumButton from '../../../shared/ui/medium-button/MediumButton';

export default function MatchingBox() {
  const [users, setUsers] = useState<MatchingUserCard[]>([]);
  const [page, setPage] = useState<number>(1);
  const limit = 5;

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/matching-users?page=${page}&limit=${limit}`
      );
      if (!response.ok) {
        throw new Error('에러');
      }
      const data: MatchingUserCard[] = await response.json();

      setUsers((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    } catch {
      console.log('에러');
    }
  }, [page]);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <s.Container>
      {users.map((user, index) => (
        <s.CardContainer key={index + Math.random()}>
          <s.UpperContainer>
            <s.ProfileIconContainer>
              <s.ProfileIcon src={user.profileImage} alt={`${user.nickname}`} />
            </s.ProfileIconContainer>
            <s.ProfileTextContainer>
              <s.UserName>{user.nickname}</s.UserName>
              <span>{user.matchCount}회 매칭됨</span>
              <span>{user.location}</span>
            </s.ProfileTextContainer>
            <s.UnderContainer>
              <s.HashtagContainer>
                {user.hashtags.map((tag, idx) => (
                  <Hashtag key={idx} text={tag} />
                ))}
              </s.HashtagContainer>
              <MediumButton
                text="임시 버튼"
                color="black"
                backgroundColor="gray"
                border="1px solid black"
              />
            </s.UnderContainer>
          </s.UpperContainer>
        </s.CardContainer>
      ))}
    </s.Container>
  );
}
