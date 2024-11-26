import * as S from "./style";
import Header from "../../widgets/post-register/header/Header";
import PageForm from "../../shared/ui/page-form/PageForm";
import { categoryData } from "../../entities/community/filter-data";
import { useEffect, useState } from "react";
import SideFilter from "../../shared/ui/side-filter/SideFilter";
import { useNavigate } from "react-router-dom";
import communityPostApi from "./api/usePost";

const PostRegister = () => {
  const navigate = useNavigate();
  const [requestFill, setRequestFill] = useState<boolean>(false);
  const [postCategory, setPostCategory] = useState<string>("");
  const [postTitle, setPostTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");
  const [sideFilterOpen, setSideFilterOpen] = useState<boolean>(false);
  const onOffSideFilter = () => setSideFilterOpen(!sideFilterOpen);
  const contentsPost = async () => {
    const postData = {
      category: postCategory,
      title: postTitle,
      content: postContent,
    };
    try {
      const response = await communityPostApi(postData);
      if (response.statusCode === 200) {
        navigate("/community");
      }
    } catch (error) {
      console.error("Error creating post", error);
    }
  };
  useEffect(() => {
    if (postCategory && postTitle && postContent) {
      setRequestFill(true);
    } else {
      setRequestFill(false);
    }
  }, [postCategory, postTitle, postContent]);
  return (
    <PageForm isGNB={false}>
      <S.Container>
        <Header />
        <S.Container>
          <S.DoneBtnContainer>
            <S.DoneBtn disabled={!requestFill} onClick={contentsPost}>
              완료
            </S.DoneBtn>
          </S.DoneBtnContainer>
          <S.PostCategoryBtn onClick={onOffSideFilter}>
            {postCategory ? (
              <S.Label>{postCategory}</S.Label>
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
            setCategory={setPostCategory}
          />
        </S.Container>
      </S.Container>
    </PageForm>
  );
};

export default PostRegister;
