import * as S from "./style";
import PageForm from "../../shared/ui/page-form/PageForm";
import Filter from "../../shared/ui/filter/Filter";
import { filterData } from "./constant/filter";
import { useEffect, useState } from "react";
import { useGetParams } from "../../shared/utils/useGetParams";
import UserProfileCard from "../../shared/ui/user-profile-card/UserProfileCard";
import SearchModal from "../../widgets/profile-search/search-modal/SearchModal";
import { useGetSearchData as getSearchData } from "../../shared/api/useGetSearchData";
import EmptyList from "../../shared/ui/empty-list/EmptyList";
import { User } from "../../shared/types/user";
import NewHeader from "../../shared/ui/new-header/NewHeader";

const ProfileSearch = () => {
  const [filter, setFilter] = useState(
    useGetParams("filter") || "matchedCount"
  );
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState([]);

  const profiles = searchResult
    .sort((a, b) => b[filter] - a[filter])
    .map((profile: User, idx) => {
      return <UserProfileCard key={`user_${idx}`} {...profile} />;
    });

  useEffect(() => {
    (async () => {
      const searchResult = await getSearchData(1);
      setSearchResult(searchResult);
    })();
  }, []);

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
    <PageForm isGNB={true}>
      <S.Container>
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
        {searchResult.length ? (
          <S.UserContainer>{profiles}</S.UserContainer>
        ) : (
          <EmptyList isBtn={false}>검색 결과가 없습니다.</EmptyList>
        )}
      </S.Container>
      {searchBarOpen && <SearchModal closeModal={setSearchBarOpen} />}
    </PageForm>
  );
};

export default ProfileSearch;
