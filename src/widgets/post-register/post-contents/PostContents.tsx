import * as S from "./style";
import { categoryData } from "../../../entities/community/filter-data";
import { useEffect, useState } from "react";
import SideFilter from "../../../shared/ui/side-filter/SideFilter";
import { useNavigate } from "react-router-dom";
import communityPostApi from "./api/usePost";

const PostContents = () => {
  const navigate = useNavigate();
  const [requestFill, setRequestFill] = useState<boolean>(false);
  const [postCategory, setPostCategory] = useState<string>("");
  const [postTitle, setPostTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");
  const [sideFilterOpen, setSideFilterOpen] = useState<boolean>(false);
  const onOffSideFilter = () => setSideFilterOpen(!sideFilterOpen);
  const contentsPost = async () => {
    const postData = {
      postCategory: postCategory,
      postTitle: postTitle,
      postContent: postContent,
      writerId: 1,
    };
    try {
      await communityPostApi(postData);
      navigate("/community");
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
    <S.Container>
      <S.DoneBtnContainer>
        <S.DoneBtn disabled={!requestFill} onClick={contentsPost}>
          완료
        </S.DoneBtn>
      </S.DoneBtnContainer>
      <S.PostCategoryBtn onClick={onOffSideFilter}>
        <S.CategoryBtnText>게시글 주제를 선택해주세요</S.CategoryBtnText>
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
        postCategory={postCategory}
        setCategory={setPostCategory}
      />
    </S.Container>
  );
};

export default PostContents;
