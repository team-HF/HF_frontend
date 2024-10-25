import * as S from "./style";
import { useAxios } from "../../shared/utils/useAxios";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { getPostList } from "./api/useGetPostList";
import { TCategoryId } from "../../entities/community/contents-type-data";
import { useInfiniteQuery } from "@tanstack/react-query";
import FilterBar from "../../widgets/community/filter-bar/FilterBar";
import FloatingButton from "../../widgets/community/floating-button/FloatingButton";
import CommunityHeader from "../../widgets/community/community-header/CommunityHeader";
import PostPreviewList from "../../shared/ui/post-preview-list/PostPreviewList";
import CategoryBar from "../../widgets/community/contents-type/CategoryBar";

const Community = () => {
  const { axiosInstance } = useAxios();
  const [ref, inView] = useInView();
  const [category, setCategory] = useState<TCategoryId>("ALL");
  const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["postList"],
    queryFn: ({ pageParam = 1 }) =>
      getPostList(category, axiosInstance, pageParam),
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
  }, [inView, category]);
  return (
    <S.Container>
      <CommunityHeader />
      <CategoryBar category={category} setCategory={setCategory} />
      <FilterBar />
      <S.PostContainer>
        {postList}
        {isLoading ? <p>로딩중...</p> : <div ref={ref}></div>}
      </S.PostContainer>
      <FloatingButton />
    </S.Container>
  );
};

export default Community;
