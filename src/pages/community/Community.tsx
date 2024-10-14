import * as S from "./style";
import { useEffect, useState } from "react";
import { ContentsTypeData } from "../../entities/community/contents-type-data";
import FilterBar from "../../widgets/community/filter-bar/FilterBar";
import ContentsType from "../../widgets/community/contents-type/ContentsType";
import CommunityHeader from "../../widgets/community/community-header/CommunityHeader";
import PostPreviewList from "../../shared/ui/post-preview-list/PostPreviewList";
import FloatingButton from "../../widgets/community/floating-button/FloatingButton";
import getPostList from "./api/useGetPostList";

interface postData {
  postId: number;
  category: string;
  title: string;
  content_part: string;
  creation_time: string;
  view_count: number;
  like_count: number;
  comment_count: number;
  fitnessLevel: string;
}

const Community = () => {
  const [currentPage, setCurrentPage] = useState<number>(1); //수정필요
  const [postList, setPostList] = useState<postData[]>([]);
  const [contentType, setContentType] = useState<string>(
    ContentsTypeData[0].name
  );
  const getFilterType = () => {
    const findObject = ContentsTypeData.find(
      (data) => data.name === contentType
    );
    return findObject ? findObject.filterType : "dropdown";
  };
  const contentsList = postList.map((data, idx) => (
    <PostPreviewList key={`community_post_${idx}`} data={data} />
  ));
  useEffect(() => {
    (async () => {
      try {
        const response = await getPostList(currentPage);
        if (Array.isArray(response)) {
          setPostList([...response]);
        }
      } catch (error) {
        console.error("Error Getting community post", error);
      }
    })();
  }, [currentPage]);
  return (
    <S.Container>
      <CommunityHeader />
      <ContentsType contentType={contentType} setContentType={setContentType} />
      <FilterBar filterType={getFilterType()} />
      <S.PostContainer>{contentsList}</S.PostContainer>
      <FloatingButton />
    </S.Container>
  );
};

export default Community;
