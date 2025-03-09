import * as S from "./style";
import PageForm from "../../shared/ui/page-form/PageForm";
import FilterBar from "../../widgets/community/filter-bar/FilterBar";
import EmptyList from "../../shared/ui/empty-list/EmptyList";
import CategoryBar from "../../widgets/community/contents-type/CategoryBar";
import FloatingButton from "../../widgets/community/floating-button/FloatingButton";
import PostPreviewList from "../../shared/ui/post-preview-list/PostPreviewList";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { getPostList } from "./api/useGetPostList";
import { useGetParams } from "../../shared/utils/useGetParams";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCommunityStore } from "./store/community-store";
import NewHeader from "../../shared/ui/new-header/NewHeader";

const Community = () => {
  const category = useGetParams("postCategory");
  const level = useGetParams("fitnessLevel");
  const [ref, inView] = useInView();
  const { categorySelected, filterSelected, labelSelected } =
    useCommunityStore();
  const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: [
      "postList",
      category,
      level,
      categorySelected,
      filterSelected,
      labelSelected,
    ],
    queryFn: ({ pageParam = 1 }) => getPostList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.totalPages > allPages.length
        ? allPages.length + 1
        : undefined;
    },
  });

  const postListData = () => {
    if (!data) return [];
    return data?.pages.flatMap((item) => item.newPostList.map((post) => post));
  };

  const postList = postListData()?.map((data, idx) => (
    <PostPreviewList key={`community_post_${idx}`} {...data} />
  ));

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <PageForm isGNB={true}>
      <S.Container>
        <NewHeader title="커뮤니티" isLoginBtn={true} isAlarmBtn={true} />
        <CategoryBar />
        <FilterBar />
        <S.PostContainer>
          {postList && postList.length ? (
            <>
              {postList}
              {isLoading ? <span>로딩중</span> : <div ref={ref} />}
            </>
          ) : (
            <EmptyList isBtn={false}>
              작성된 글이 없습니다
              <br />
              친구들과 다양한 이야기를 나눠보세요
            </EmptyList>
          )}
        </S.PostContainer>
        <FloatingButton />
      </S.Container>
    </PageForm>
  );
};

export default Community;
