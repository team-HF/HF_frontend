import * as S from './matching-list.style';
import Hashtag from '../../../shared/ui/hashtag/Hashtag';
import { useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import ChatButton from './ChatButton';
import ReviewButton from './ReviewButton';
import { useGetMyMatchingList } from '../api/getMyMatchingList';
import { useGetMyData } from '../../../shared/api/useGetMyData';
import { useQueryClient } from '@tanstack/react-query';
import {
  getCompanionStyleText,
  CompanionStyle,
  getFitnessEagernessText,
  FitnessEagerness,
  getFitnessKindText,
  FitnessKind,
  getFITNESS_OBJECTIVE_MAP,
  FitnessObjective,
} from '../../../shared/constants/fitness-category';
import EmptyMatchingList from './emptyMatchingList';

export default function MatchingList() {
  const [filterStatus, setFilterStatus] = useState<string>('전체');
  const [isOpenDropdownFilter, setIsOpenDropdownFilter] =
    useState<boolean>(false);

  const filterOptions = ['전체', '매칭 진행 중', '매칭 종료', '매칭 중단'];
  const queryClient = useQueryClient();

  const { data: myData } = useGetMyData();
  const memberId = myData?.memberId;

  const {
    data: MatchingListData,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetMyMatchingList(memberId ?? 0, filterStatus);
  console.log(MatchingListData);
  const allMatches =
    MatchingListData?.pages.flatMap((page) =>
      page.content.content.map((item) => ({
        id: item.matchingId,
        profileImage: item.opponentInfo.profileImageUrl || '',
        nickname: item.opponentInfo.nickname,
        matchCount: item.opponentInfo.matchedCount,
        location: item.meetingPlace,
        time: item.meetingTime,
        status: item.matchingStatus,
        hashtags: [
          getCompanionStyleText(
            item.opponentInfo.companionStyle as CompanionStyle
          ),
          getFitnessEagernessText(
            item.opponentInfo.fitnessEagerness as FitnessEagerness
          ),
          getFitnessKindText(item.opponentInfo.fitnessKind as FitnessKind),
          getFITNESS_OBJECTIVE_MAP(
            item.opponentInfo.fitnessObjective as FitnessObjective
          ),
        ].filter(Boolean),
      }))
    ) || [];

  const handleFilterChange = (option: string) => {
    setFilterStatus(option);
    setIsOpenDropdownFilter(false);
    queryClient.invalidateQueries({
      queryKey: ['myMatchingList', memberId, option].filter(Boolean),
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <>
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
                onClick={() => handleFilterChange(option)}
              >
                {option}
              </S.DropdownItem>
            ))}
          </S.Dropdown>
        )}
      </S.FilterContainer>
      <S.Container>
        {allMatches.length > 0 ? (
          <Virtuoso
            useWindowScroll
            data={allMatches}
            endReached={() => {
              if (hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
              }
            }}
            itemContent={(_, user) => (
              <S.CardContainer key={user.id} status={user.status}>
                <S.UpperContainer>
                  <S.ProfileIconContainer>
                    <S.ProfileIcon src={user.profileImage} alt="Profile" />
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
                  <S.MiddleText>{user.matchCount}회 매칭됨</S.MiddleText>
                  <S.MiddleText>{user.location}</S.MiddleText>
                </S.MiddleContainer>
                <S.UnderContainer>
                  <S.DateWrapper>
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
        ) : (
          <EmptyMatchingList />
        )}
      </S.Container>
    </>
  );
}
