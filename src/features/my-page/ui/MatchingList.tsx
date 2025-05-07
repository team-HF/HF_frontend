import * as S from './matching-list.style';
import Hashtag from '../../../shared/ui/hashtag/Hashtag';
import { useState, useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso';
import ChatButton from './ChatButton';
import ReviewButton from './ReviewButton';
import { useGetMyMatchingList } from '../api/useGetMyMatchingList';
import { useGetMyData } from '../../../shared/api/useGetMyData';
import { useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

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
import EmptyMatchingList from './EmptyMatchingList';
import Loader from '../../../shared/ui/loader/Loader';
import {
  formatDate,
  getFilterNameFromParam,
  getFilterParamFromName,
} from '../utils/matching-list';

export default function MatchingList() {
  const [filterStatus, setFilterStatus] = useState<string>('전체');
  const [isOpenDropdownFilter, setIsOpenDropdownFilter] =
    useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterOptions = ['전체', '매칭 진행 중', '매칭 종료', '매칭 중단'];
  const queryClient = useQueryClient();
  const { data: myData } = useGetMyData();
  const memberId = myData?.memberId;

  useEffect(() => {
    const filterParam = searchParams.get('filter');
    if (filterParam) {
      setFilterStatus(getFilterNameFromParam(filterParam));
    }
  }, [searchParams]);

  const {
    data: MatchingListData,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetMyMatchingList(memberId!, filterStatus);
  const allMatches =
    MatchingListData?.pages.flatMap((page) =>
      page.content.content.map((item) => ({
        id: item.matchingId,
        profileImage: item.opponentInfo.profileImageUrl || null,
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

    const filterParam = getFilterParamFromName(option);
    const tabParam = searchParams.get('tab') || 'matching';
    setSearchParams({ tab: tabParam, filter: filterParam });

    if (memberId) {
      queryClient.invalidateQueries({
        queryKey: ['myMatchingList', memberId, option],
      });
    }
  };

  if (isLoading) {
    return <Loader />;
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
      <S.Container role="list">
        {allMatches === undefined || allMatches.length > 0 ? (
          <Virtuoso
            useWindowScroll
            data={allMatches}
            fixedItemHeight={150}
            overscan={300}
            endReached={() => {
              if (hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
              }
            }}
            itemContent={(_, user) => (
              <S.CardContainer
                key={user.id}
                status={user.status}
                role="listitem"
              >
                <S.UpperContainer>
                  <S.ProfileIconContainer>
                    {!user.profileImage ? (
                      <img
                        src="/svg/default-profile-icon.svg"
                        alt="Profile"
                        style={{ width: '24px', height: '24px' }}
                      />
                    ) : (
                      <S.ProfileIcon src={user.profileImage} alt="Profile" />
                    )}
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
                    <img
                      src="/svg/location-icon.svg"
                      alt="location-icon"
                      style={{
                        width: '16px',
                        height: '16px',
                        marginRight: '8px',
                      }}
                    />
                    <span style={{ marginLeft: '8px' }}>
                      {user.matchCount}회 매칭됨
                    </span>
                  </S.MiddleText>
                  <S.MiddleText style={{ marginTop: '4px' }}>
                    <img
                      src="/svg/location-icon.svg"
                      alt="location-icon"
                      style={{
                        width: '16px',
                        height: '16px',
                        marginRight: '8px',
                      }}
                    />
                    <span style={{ marginLeft: '8px' }}>{user.location}</span>
                  </S.MiddleText>
                </S.MiddleContainer>
                <S.UnderContainer>
                  <S.DateWrapper>
                    <S.DateText>매칭 날짜 : {formatDate(user.time)}</S.DateText>
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
