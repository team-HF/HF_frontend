import * as S from "./style";
import { useAxios } from "../../shared/utils/useAxios";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { getPostList } from "./api/useGetPostList";
import { TCategoryId } from "../../entities/community/contents-type-data";
import { useInfiniteQuery } from "@tanstack/react-query";
import PageForm from "../../shared/ui/page-form/PageForm";
import FilterBar from "../../widgets/community/filter-bar/FilterBar";
import EmptyList from "../../shared/ui/empty-list/EmptyList";
import CategoryBar from "../../widgets/community/contents-type/CategoryBar";
import FloatingButton from "../../widgets/community/floating-button/FloatingButton";
import CommunityHeader from "../../widgets/community/community-header/CommunityHeader";
import PostPreviewList from "../../shared/ui/post-preview-list/PostPreviewList";

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
    <PageForm isGNB={true}>
      <S.Container>
        <CommunityHeader />
        <CategoryBar category={category} setCategory={setCategory} />
        <FilterBar />
        <S.PostContainer>
          {postList && postList.length ? (
            postList
          ) : (
            <EmptyList isBtn={false}>
              작성된 글이 없습니다
              <br />
              친구들과 다양한 이야기를 나눠보세요
            </EmptyList>
          )}
          {isLoading ? <p>로딩중...</p> : <div ref={ref} />}
        </S.PostContainer>
        <FloatingButton />
      </S.Container>
    </PageForm>
  );
};

export default Community;
