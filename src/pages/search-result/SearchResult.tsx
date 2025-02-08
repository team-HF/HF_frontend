import { useEffect, useState } from "react";
import { useGetSearchData as getSearchData } from "../../shared/api/useGetSearchData";
import * as S from "./style";
import PageForm from "../../shared/ui/page-form/PageForm";
import SearchModal from "../../widgets/profile-search/search-modal/SearchModal";
import UserProfileCard from "../../shared/ui/user-profile-card/UserProfileCard";
import PostPreviewList from "../../shared/ui/post-preview-list/PostPreviewList";
import { FitnessLevel } from "../../shared/types/user";
import {
  CompanionStyle,
  FitnessEagerness,
  FitnessKind,
  FitnessObjective,
} from "../../shared/constants/fitness-category";

type TPost = {
  category: string;
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

export type TProfile = {
  companionStyle: CompanionStyle;
  fitnessEagerness: FitnessEagerness;
  fitnessKind: FitnessKind;
  fitnessLevel: FitnessLevel;
  fitnessObjective: FitnessObjective;
  introduction: string;
  matchedCount: number;
  nickname: string;
  profileImageUrl: string | null;
  wishCount: number;
  memberId: number;
};

const SearchResult = () => {
  const [searchResult, setSearchResult] = useState({
    postList: [],
    postListSize: 0,
    profileList: [],
    profileListSize: 0,
  });
  console.log(searchResult);
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);

  const profiles = searchResult.profileList.map((profile: TProfile, idx) => {
    return <UserProfileCard key={`user_${idx}`} {...profile} />;
  });

  const posts = searchResult.postList.map((post: TPost, idx) => {
    return <PostPreviewList key={`community_post_${idx}`} {...post} />;
  });

  useEffect(() => {
    (async () => {
      const searchResult = await getSearchData();
      setSearchResult(searchResult);
    })();
  }, []);

  return (
    <PageForm isGNB={true}>
      <S.Container>
        <S.Box className="search_bar">
          <S.IconBtn>
            <S.ArrowIcon className="back" src="/svg/arrow-down.svg" />
          </S.IconBtn>
          <S.InputContainer onClick={() => setSearchBarOpen(true)}>
            <S.SearchInput>검색 키워드</S.SearchInput>
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
                <S.ShowAllBtn>
                  모두 보기
                  <S.ArrowIcon className="front" src="/svg/arrow-down.svg" />
                </S.ShowAllBtn>
              )}
            </S.Box>
            <S.Box className="column gap_16">
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
