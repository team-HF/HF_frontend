import * as S from "./style";
import Header from "../../widgets/post-register/header/Header";
import PageForm from "../../shared/ui/page-form/PageForm";
import SideFilter from "../../shared/ui/side-filter/SideFilter";
import communityPostApi from "./api/usePost";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categoryData, TCategory } from "../../entities/community/filter-data";
import { useGetPostDetail as getPostDetail } from "../post-detail/api/useGetPostDetail";
import { usePostUpdate as postUpdate } from "./api/usePostUpdate";

export type TCategoryData = { name: string; id: TCategory };

const PostRegister = () => {
  const { id } = useParams();
  const postId = Number(id);
  const navigate = useNavigate();

  const [requestFill, setRequestFill] = useState<boolean>(false);
  const [postCategory, setPostCategory] = useState<TCategoryData | null>(null);
  const [postTitle, setPostTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");
  const [sideFilterOpen, setSideFilterOpen] = useState<boolean>(false);

  const headerNavigate = () => navigate(-1);

  const onOffSideFilter = () => setSideFilterOpen(!sideFilterOpen);

  const postRegister = async () => {
    if (postCategory) {
      const postData = {
        category: postCategory.id,
        title: postTitle,
        content: postContent,
      };
      if (postId) {
        await postUpdate({ ...postData, postId: postId });
        navigate(`/community/post-detail/${postId}`, {
          state: { from: window.location.pathname },
        });
      } else {
        const response = await communityPostApi(postData);
        navigate(`/community/post-detail/${response.content}`, {
          state: { from: window.location.pathname },
        });
      }
    }
  };

  useEffect(() => {
    if (postCategory && postTitle && postContent) {
      setRequestFill(true);
    } else {
      setRequestFill(false);
    }
  }, [postCategory, postTitle, postContent]);

  useEffect(() => {
    (async () => {
      if (postId) {
        const postDetailResponse = await getPostDetail(postId);
        const postDetail = postDetailResponse.content;
        setPostCategory(
          postDetail.postCategory === "FREE_COMMUNITY"
            ? { id: "FREE_COMMUNITY", name: "자유게시판" }
            : { id: "COUNSELING", name: "고민/사연" }
        );
        setPostTitle(postDetail.title);
        setPostContent(postDetail.content);
      }
    })();
  }, []);
  return (
    <PageForm isGNB={false}>
      <S.Container>
        <Header title={"글쓰기"} navigate={headerNavigate} />
        <S.Container>
          <S.DoneBtnContainer>
            <S.DoneBtn disabled={!requestFill} onClick={postRegister}>
              완료
            </S.DoneBtn>
          </S.DoneBtnContainer>
          <S.PostCategoryBtn onClick={onOffSideFilter}>
            {postCategory ? (
              <S.Label>{postCategory.name}</S.Label>
            ) : (
              <S.CategoryBtnText>게시글 주제를 선택해주세요</S.CategoryBtnText>
            )}
            <S.ArrowIcon src={`/svg/arrow-down.svg`} />
          </S.PostCategoryBtn>
          <S.AlertContainer>
            <img src="/svg/warring-icon.svg" />
            <S.AlertText>
              운동관련 외 명예훼손, 광고/홍보 목적의 글은 올리실 수 없어요.
            </S.AlertText>
          </S.AlertContainer>
          <S.InputContainer>
            <S.TitleInput
              placeholder="제목을 입력하세요"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.ContentInput
              placeholder="자유롭게 내용을 입력해주세요"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          </S.InputContainer>
          <SideFilter
            title={"게시글 주제를 선택해주세요"}
            open={sideFilterOpen}
            setSideFilterOpen={setSideFilterOpen}
            filterData={categoryData}
            category={postCategory}
            setCategory={setPostCategory}
          />
        </S.Container>
      </S.Container>
    </PageForm>
  );
};

export default PostRegister;
