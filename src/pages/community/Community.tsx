import * as S from "./style";
import { Virtuoso } from "react-virtuoso";
import { useAxios } from "../../shared/utils/useAxios";
import { getPostList } from "./api/useGetPostList";
import { ContentsTypeData } from "../../entities/community/contents-type-data";
import { useInfiniteScroll } from "../../shared/utils/useInfiniteScroll";
import { useCallback, useEffect, useState } from "react";
import FilterBar from "../../widgets/community/filter-bar/FilterBar";
import ContentsType from "../../widgets/community/contents-type/ContentsType";
import FloatingButton from "../../widgets/community/floating-button/FloatingButton";
import CommunityHeader from "../../widgets/community/community-header/CommunityHeader";
import PostPreviewList, {
  PostData,
} from "../../shared/ui/post-preview-list/PostPreviewList";

const Community = () => {
  const { axiosInstance } = useAxios();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postList, setPostList] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [contentType, setContentType] = useState<string>(
    ContentsTypeData[0].name
  );
  const getFilterType = () => {
    const findObject = ContentsTypeData.find(
      (data) => data.name === contentType
    );
    return findObject ? findObject.filterType : "dropdown";
  };
  const getPosts = useCallback(async () => {
    if (!hasMore || isLoading) return;
    setIsLoading(true);
    try {
      const { newPostList, totalPages } = await getPostList(
        axiosInstance,
        currentPage
      );
      setPostList([...postList, ...newPostList]);
      setHasMore(currentPage < totalPages);
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.error("Error fetching post list:", error);
      setHasMore(false);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, hasMore, isLoading]);
  const { virtuosoRef } = useInfiniteScroll(getPosts, hasMore, isLoading);
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <S.Container>
      <CommunityHeader />
      <ContentsType contentType={contentType} setContentType={setContentType} />
      <FilterBar filterType={getFilterType()} />
      <S.PostContainer>
        <Virtuoso
          useWindowScroll
          ref={virtuosoRef}
          data={postList}
          endReached={getPosts}
          itemContent={(_, post: PostData) => <PostPreviewList {...post} />}
        />
        {isLoading && <p>로딩중...</p>}
      </S.PostContainer>
      <FloatingButton />
    </S.Container>
  );
};

export default Community;
