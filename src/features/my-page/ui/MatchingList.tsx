import * as S from './matching-list.style';
import Hashtag from '../../../shared/ui/hashtag/Hashtag';
import { useEffect, useState, useCallback } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { MatchingUserCard } from '../../../entities/my-page/model/matching-user-card.interface';
import { useInfiniteScroll } from '../../../shared/utils/useInfiniteScroll';
import ChatButton from './ChatButton';
import ReviewButton from './ReviewButton';

export default function MatchingList() {
  const [users, setUsers] = useState<MatchingUserCard[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const limit = 10;
  const [isOpenDropdownFilter, setIsOpenDropdownFilter] =
    useState<boolean>(false);
  const [filterStatus, setFilterStatus] = useState<string>('전체');
  const filterOptions = ['전체', '매칭 진행 중', '매칭 종료', '매칭 중단'];
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
  return (
    <S.Container>
      <S.FilterContainer>
        <S.FilterButton
          onClick={() => setIsOpenDropdownFilter((prev) => !prev)}
        >
          {filterStatus}
          <S.DropdownArrowWrapper>
            <img src="/svg/under-arrow-icon.svg" alt="under-arrow-icon" />
          </S.DropdownArrowWrapper>
        </S.FilterButton>
        {isOpenDropdownFilter && (
          <S.Dropdown>
            {filterOptions.map((option, idx) => (
              <S.DropdownItem
                key={idx}
                onClick={() => {
                  setFilterStatus(option);
                  setIsOpenDropdownFilter(false);
                }}
              >
                {option}
              </S.DropdownItem>
            ))}
          </S.Dropdown>
        )}
      </S.FilterContainer>
      <Virtuoso
        useWindowScroll
        ref={virtuosoRef}
        data={users}
        endReached={fetchUsers}
        itemContent={(_, user: MatchingUserCard) => (
          <S.CardContainer key={user.id} status={user.status}>
            <S.UpperContainer>
              <S.ProfileIconContainer>
                <S.ProfileIcon
                  src={user.profileImage}
                  alt={`${user.nickname}의 프로필`}
                />
              </S.ProfileIconContainer>
              <S.ProfileTextContainer>
                <S.UserName>{user.nickname}</S.UserName>
              </S.ProfileTextContainer>
              <S.HashtagContainer>
                {user.hashtags.map((tag, idx) => (
                  <Hashtag key={idx} text={tag} />
                ))}
              </S.HashtagContainer>
            </S.UpperContainer>
            <S.MiddleContainer>
              <S.MiddleText>
                <S.StyledSvg src="/svg/location-icon.svg" alt="location-icon" />
                {user.matchCount}회 매칭됨
              </S.MiddleText>
              <S.MiddleText>
                <S.StyledSvg src="/svg/location-icon.svg" alt="location-icon" />
                {user.location}
              </S.MiddleText>
            </S.MiddleContainer>
            <S.UnderContainer>
              <S.DateWrapper>
                <S.StyledSvg src="/svg/calendar-icon.svg" alt="calendar-icon" />
                <S.DateText>{user.time}</S.DateText>
              </S.DateWrapper>
              <S.ButtonContainer>
                {user.status === 'FINISHED' ? (
                  <>
                    <ReviewButton />
                    <ChatButton />
                  </>
                ) : (
                  <ChatButton />
                )}
              </S.ButtonContainer>
            </S.UnderContainer>
          </S.CardContainer>
        )}
      />
      {isLoading && <p>로딩 중...</p>}
      {error && <p>{error}</p>}
    </S.Container>
  );
}
