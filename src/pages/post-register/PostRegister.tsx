import * as S from "./style";
import PageForm from "../../shared/ui/page-form/PageForm";
import SideFilter from "../../shared/ui/side-filter/SideFilter";
import communityPostApi from "./api/usePost";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categoryData, TCategory } from "../../entities/community/filter-data";
import { useGetPostDetail as getPostDetail } from "../post-detail/api/useGetPostDetail";
import { usePostUpdate as postUpdate } from "./api/usePostUpdate";
import NewHeader from "../../shared/ui/new-header/NewHeader";
import { useMyProfileStore } from "../../shared/store/my-profile-store";
import { useForm } from "react-hook-form";

export type TCategoryData = { name: string; id: TCategory };

const PostRegister = () => {
  const { id } = useParams();
  const postId = Number(id);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      postTitle: "",
      postContent: "",
    },
  });
  const postTitle = watch("postTitle");
  const postContent = watch("postContent");

  const { myProfile } = useMyProfileStore();

  const [requestFill, setRequestFill] = useState<boolean>(false);
  const [postCategory, setPostCategory] = useState<TCategoryData | null>(null);
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
        const response = await postUpdate({
          ...postData,
          postId: postId,
          writerId: myProfile?.memberId,
        });
        if (response.statusCode === 200) {
          navigate(`/community/post-detail/${postId}`, {
            state: { from: window.location.pathname },
          });
        }
      } else {
        const response = await communityPostApi({
          ...postData,
          writerId: myProfile?.memberId,
        });
        if (response.statusCode === 200) {
          navigate(`/community/post-detail/${response.content}`, {
            state: { from: window.location.pathname },
          });
        }
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
      window.scrollTo(0, 0);
      if (postId) {
        const postDetailResponse = await getPostDetail(postId, () =>
          navigate("/not-found")
        );
        setPostCategory(
          postDetailResponse.postCategory === "FREE_COMMUNITY"
            ? { id: "FREE_COMMUNITY", name: "자유게시판" }
            : { id: "COUNSELING", name: "고민/사연" }
        );
        reset({
          postTitle: postDetailResponse.title,
          postContent: postDetailResponse.content,
        });
      }
    })();
  }, []);
  
  return (
    <PageForm isGNB={false}>
      <S.Container>
        <NewHeader
          title={"글쓰기"}
          isBackBtn={true}
          onClickBack={headerNavigate}
        />
        <S.Box
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(postRegister)();
          }}
        >
          <S.DoneBtnContainer>
            <S.DoneBtn type="submit" disabled={!requestFill}>
              완료
            </S.DoneBtn>
          </S.DoneBtnContainer>
          <S.PostCategoryBtn type="button" onClick={onOffSideFilter}>
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
              {...register("postTitle", {
                required: "제목을 입력해주세요",
                minLength: {
                  value: 3,
                  message: "최소 3자 이상 입력해주세요",
                },
                maxLength: {
                  value: 10,
                  message: "최대 10자까지 입력 가능합니다",
                },
              })}
            />
            {errors.postTitle && (
              <S.ErrorMessage>{errors.postTitle.message}</S.ErrorMessage>
            )}
          </S.InputContainer>
          <S.InputContainer>
            <S.ContentInput
              placeholder="자유롭게 내용을 입력해주세요"
              value={postContent}
              {...register("postContent", {
                required: "내용을 입력해주세요",
                minLength: {
                  value: 10,
                  message: "최소 10자 이상 입력해주세요",
                },
                maxLength: {
                  value: 1000,
                  message: "최대 1000자까지 입력 가능합니다",
                },
              })}
            />
            {errors.postContent && (
              <S.ErrorMessage>{errors.postContent.message}</S.ErrorMessage>
            )}
          </S.InputContainer>
          <SideFilter
            title={"게시글 주제를 선택해주세요"}
            open={sideFilterOpen}
            setSideFilterOpen={setSideFilterOpen}
            filterData={categoryData}
            category={postCategory}
            setCategory={setPostCategory}
          />
        </S.Box>
      </S.Container>
    </PageForm>
  );
};

export default PostRegister;
