import { useEffect, useState } from "react";
import { useGetSearchData as getSearchData } from "../../shared/api/useGetSearchData";
import * as S from "./style";
import PageForm from "../../shared/ui/page-form/PageForm";
import SearchModal from "../../widgets/profile-search/search-modal/SearchModal";
import UserProfileCard from "../../shared/ui/user-profile-card/UserProfileCard";
import PostPreviewList from "../../shared/ui/post-preview-list/PostPreviewList";
import { User } from "../../shared/types/user";
import { useSearchValueStore } from "../../shared/store/search-value-store";
import { FitnessLevel } from "../../shared/constants/fitness-category";
import { useNavigate } from "react-router-dom";
import { useLocationStore } from "../../shared/store/location-store";
import { TCategory } from "../../entities/community/filter-data";

// ❕추후에 타입 통일 필요
type TPost = {
  category: TCategory;
  commentCount: number;
  content: string;
  creationTime: string;
  fitnessLevel: FitnessLevel;
  likeCount: number;
  memberProfileUrl: string | null;
  postId: number;
  title: string;
  totalPageSize: number;
  viewCount: number;
};

const SearchResult = () => {
  const navigate = useNavigate();
  const { reset } = useLocationStore();

  const [searchResult, setSearchResult] = useState({
    postList: [],
    postListSize: 0,
    profileList: {
      memberList: [],
    },
    profileListSize: 0,
  });
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);

  const { keyword } = useSearchValueStore();

  const profiles = searchResult.profileList.memberList.map(
    (profile: User, idx) => {
      return <UserProfileCard key={`user_${idx}`} {...profile} />;
    }
  );

  const posts = searchResult.postList.map((post: TPost, idx) => {
    return <PostPreviewList key={`community_post_${idx}`} {...post} />;
  });

  useEffect(() => {
    (async () => {
      if (!searchBarOpen) {
        const searchResult = await getSearchData(1);
        if (searchResult) setSearchResult(searchResult);
      }
    })();
  }, [searchBarOpen]);

  return (
    <PageForm isGNB={true} isFooter={true}>
      <S.Container>
        <S.Box className="search_bar">
          <S.IconBtn
            onClick={() => {
              reset();
              navigate("/");
            }}
          >
            <S.ArrowIcon className="back" src="/svg/arrow-down.svg" />
          </S.IconBtn>
          <S.InputContainer onClick={() => setSearchBarOpen(true)}>
            <S.SearchInput value={keyword}>
              {keyword ? keyword : "운동 스타일, 키워드로 검색"}
            </S.SearchInput>
            <S.IconBox>
              <img src="/svg/search-icon.svg" />
            </S.IconBox>
          </S.InputContainer>
        </S.Box>
        <S.Box className="column gap_32">
          <S.ProfileContainer>
            <S.Box className="search_result_title space_between">
              <S.Box className="gap_8">
                <S.ResultTile className="title">프로필</S.ResultTile>
                <S.ResultTile className="count">
                  {searchResult.profileListSize}
                </S.ResultTile>
              </S.Box>
              {profiles.length > 5 && (
                <S.ShowAllBtn
                  onClick={() => {
                    navigate(
                      `/?filter=matchedCount` + `&${window.location.search}`
                    );
                  }}
                >
                  모두 보기
                  <S.ArrowIcon className="front" src="/svg/arrow-down.svg" />
                </S.ShowAllBtn>
              )}
            </S.Box>
            <S.Box className="wrap gap_16">
              {profiles.length ? (
                profiles
              ) : (
                <S.EmptyList>검색 결과가 없습니다</S.EmptyList>
              )}
            </S.Box>
          </S.ProfileContainer>
          <S.PostContainer>
            <S.Box className="search_result_title space_between">
              <S.Box className="gap_8">
                <S.ResultTile className="title">커뮤니티</S.ResultTile>
                <S.ResultTile className="count">
                  {searchResult.postListSize}
                </S.ResultTile>
              </S.Box>
              {posts.length > 5 && (
                <S.ShowAllBtn>
                  모두 보기
                  <S.ArrowIcon className="front" src="/svg/arrow-down.svg" />
                </S.ShowAllBtn>
              )}
            </S.Box>
            <S.Box className="column">
              {posts.length ? (
                posts
              ) : (
                <S.EmptyList>검색 결과가 없습니다</S.EmptyList>
              )}
            </S.Box>
          </S.PostContainer>
        </S.Box>
      </S.Container>
      {searchBarOpen && <SearchModal closeModal={setSearchBarOpen} />}
    </PageForm>
  );
};

export default SearchResult;
