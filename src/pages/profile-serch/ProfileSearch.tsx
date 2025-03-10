import * as S from "./style";
import PageForm from "../../shared/ui/page-form/PageForm";
import Filter from "../../shared/ui/filter/Filter";
import { filterData } from "./constant/filter";
import { useEffect, useState } from "react";
import { useGetParams } from "../../shared/utils/useGetParams";
import UserProfileCard from "../../shared/ui/user-profile-card/UserProfileCard";
import SearchModal from "../../widgets/profile-search/search-modal/SearchModal";
import EmptyList from "../../shared/ui/empty-list/EmptyList";
import { User } from "../../shared/types/user";
import NewHeader from "../../shared/ui/new-header/NewHeader";
import { useGetProfileList as getProfileList } from "../../shared/api/useGetProfileList";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

const ProfileSearch = () => {
  const [ref, inView] = useInView();

  const [filter, setFilter] = useState(
    useGetParams("filter") || "matchedCount"
  );
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);

  const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["profileList"],
    queryFn: ({ pageParam = 1 }) => getProfileList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.totalPages > allPages.length
        ? allPages.length + 1
        : undefined;
    },
  });

  const profileListData = () => {
    if (!data) return [];
    return data?.pages.flatMap((item) => item.map((profile: User) => profile));
  };

  const profiles = profileListData()
    .sort((a, b) => b[filter] - a[filter])
    .map((profile: User, idx) => {
      return <UserProfileCard key={`user_${idx}`} {...profile} />;
    });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  useEffect(() => {
    if (searchBarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchBarOpen]);

  return (
    <PageForm isGNB={true} isFooter={true}>
      <S.Container id="이거다">
        <NewHeader logo={true} isAlarmBtn={true} isLoginBtn={true} />
        <S.InputContainer onClick={() => setSearchBarOpen(true)}>
          <S.SearchInput>운동 스타일, 키워드로 검색</S.SearchInput>
          <S.IconBox>
            <img src="/svg/search-icon.svg" />
          </S.IconBox>
        </S.InputContainer>
        <S.FilterContainer>
          <Filter
            filterData={filterData}
            selectedFilter={filter}
            setFilter={setFilter}
            paramName="filter"
          />
        </S.FilterContainer>
        <S.UserContainer>
          {profiles && profiles.length ? (
            <>
              {profiles}
              {isLoading ? <span>로딩중</span> : <div ref={ref} />}
            </>
          ) : (
            <EmptyList isBtn={false}>검색 결과가 없습니다.</EmptyList>
          )}
        </S.UserContainer>
      </S.Container>
      {searchBarOpen && <SearchModal closeModal={setSearchBarOpen} />}
    </PageForm>
  );
};

export default ProfileSearch;
