import * as S from "./style";
import { useAxios } from "../../shared/utils/useAxios";
import { useInView } from "react-intersection-observer";
import { getPostList } from "./api/useGetPostList";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ContentsTypeData } from "../../entities/community/contents-type-data";
import { useEffect, useState } from "react";
import FilterBar from "../../widgets/community/filter-bar/FilterBar";
import ContentsType from "../../widgets/community/contents-type/ContentsType";
import FloatingButton from "../../widgets/community/floating-button/FloatingButton";
import CommunityHeader from "../../widgets/community/community-header/CommunityHeader";
import PostPreviewList from "../../shared/ui/post-preview-list/PostPreviewList";

const Community = () => {
  const { axiosInstance } = useAxios();
  const [ref, inView] = useInView();
  const [contentType, setContentType] = useState<string>(
    ContentsTypeData[0].name
  );
  const getFilterType = () => {
    const findObject = ContentsTypeData.find(
      (data) => data.name === contentType
    );
    return findObject ? findObject.filterType : "dropdown";
  };
  const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["postList"],
    queryFn: ({ pageParam = 1 }) => getPostList(axiosInstance, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.totalPages > allPages.length ? allPages.length + 1 : undefined,
    staleTime: 5 * 60 * 1000,
  });
  const postListData = data?.pages.flatMap((item) =>
    item.newPostList.map((post) => post)
  );
  const postList = postListData?.map((data) => <PostPreviewList {...data} />);
  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
    // eslint-disable-next-line
  }, [inView]);
  return (
    <S.Container>
      <CommunityHeader />
      <ContentsType contentType={contentType} setContentType={setContentType} />
      <FilterBar filterType={getFilterType()} />
      <S.PostContainer>
        {postList}
        {isLoading ? <p>로딩중...</p> : <div ref={ref}></div>}
      </S.PostContainer>
      <FloatingButton />
    </S.Container>
  );
};

export default Community;
