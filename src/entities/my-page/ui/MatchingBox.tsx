import * as S from './matching-box.style';
import Hashtag from '../../../shared/ui/hashtag/Hashtag';
import { useEffect, useState, useCallback } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { MatchingUserCard } from '../model/matching-user-card.interface';
import MediumButton from '../../../shared/ui/medium-button/MediumButton';
import { useInfiniteScroll } from '../../../shared/utils/useInfiniteScroll';

export default function MatchingBox() {
  const [users, setUsers] = useState<MatchingUserCard[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const limit = 10;

  const fetchUsers = useCallback(async () => {
    if (!hasMore || isLoading) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/matching-users?page=${page}&limit=${limit}`
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || '에러');
      }
      const result = await response.json();
      const fetchedUsers: MatchingUserCard[] = result.data;
      const totalPages: number = result.totalPages;
      setUsers((prev) => [...prev, ...fetchedUsers]);
      setHasMore(page < totalPages);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error('데이터 패칭 중 에러 발생:', error);
      setError((error as Error).message);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, [page, hasMore, isLoading]);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { virtuosoRef } = useInfiniteScroll(fetchUsers, hasMore, isLoading);
  console.log(users);
  return (
    <S.Container>
      <Virtuoso
        useWindowScroll
        ref={virtuosoRef}
        data={users}
        endReached={fetchUsers}
        itemContent={(_, user: MatchingUserCard) => (
          <S.CardContainer key={user.id}>
            <S.UpperContainer>
              <S.ProfileIconContainer>
                <S.ProfileIcon
                  src={user.profileImage}
                  alt={`${user.nickname}의 프로필`}
                />
              </S.ProfileIconContainer>
              <S.ProfileTextContainer>
                <S.UserName>{user.nickname}</S.UserName>
                <span>{user.matchCount}회 매칭됨</span>
                <span>{user.location}</span>
              </S.ProfileTextContainer>
              <S.UnderContainer>
                <S.HashtagContainer>
                  {user.hashtags.map((tag, idx) => (
                    <Hashtag key={idx} text={tag} />
                  ))}
                </S.HashtagContainer>
                <MediumButton
                  text="임시 버튼"
                  color="black"
                  backgroundColor="gray"
                  border="1px solid black"
                />
              </S.UnderContainer>
            </S.UpperContainer>
          </S.CardContainer>
        )}
      />
      {isLoading && <p>로딩 중...</p>}
      {error && <p>{error}</p>}
    </S.Container>
  );
}
