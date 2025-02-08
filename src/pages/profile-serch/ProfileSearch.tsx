import * as S from "./style";
import PageForm from "../../shared/ui/page-form/PageForm";
import Filter from "../../shared/ui/filter/Filter";
import { filterData } from "./constant/filter";
import { useEffect, useState } from "react";
import { useGetParams } from "../../shared/utils/useGetParams";
import UserProfileCard from "../../shared/ui/user-profile-card/UserProfileCard";
import SearchModal from "../../widgets/profile-search/search-modal/SearchModal";
import LogoHeader from "../../shared/ui/logo-header/Header";
import { useGetSearchData as getSearchData } from "../../shared/api/useGetSearchData";
import { TProfile } from "../search-result/SearchResult";

const ProfileSearch = () => {
  const [filter, setFilter] = useState(useGetParams("filter"));
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState({
    profileList: [],
    profileListSize: 0,
  });

  const profiles = searchResult.profileList.map((profile: TProfile, idx) => {
    return <UserProfileCard key={`user_${idx}`} {...profile} />;
  });

  useEffect(() => {
    (async () => {
      const searchResult = await getSearchData();
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
        <LogoHeader backBtn={false} />
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
        <S.UserContainer>{profiles}</S.UserContainer>
      </S.Container>
      {searchBarOpen && <SearchModal closeModal={setSearchBarOpen} />}
    </PageForm>
  );
};

export default ProfileSearch;
