import * as S from "./style";
import EditButton from "../../../shared/ui/edit-button/EditButton";
import { TPost } from "../../../shared/types/community";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetDate as getData } from "../../../shared/utils/useGetDate";
import { usePostLike as postLike } from "./api/usePostLike";
import { useGetLike as getPostLike } from "./api/useGetLike";
import { useDeletePostLike as deletePostLike } from "./api/useDeletePostLike";
import { useMyProfileStore } from "../../../shared/store/my-profile-store";

interface postContentProps {
  setAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
  postData: TPost | null;
  postId: number;
}

export default function PostContent({
  setAlertOpen,
  postData,
  postId,
}: postContentProps) {
  const navigate = useNavigate();
  const { myProfile } = useMyProfileStore();

  const [likeId, setLikeId] = useState<number | null>(null);

  const category =
    postData?.postCategory === "FREE_COMMUNITY" ? "자유게시판" : "고민/사연";

  const changeLike = async () => {
    if (likeId) {
      console.log(likeId);
      const response = await deletePostLike(likeId);
      if (response.statusCode === 200) {
        setLikeId(response.content);
      }
    } else {
      const response = await postLike(postId, myProfile?.memberId);
      if (response.statusCode === 201) {
        setLikeId(response.content);
      }
    }
  };

  const updateContent = () => navigate(`/community/post-update/${postId}`);

  useEffect(() => {
    (async () => {
      const postLikeResponse = await getPostLike(postId, myProfile?.memberId);
      if (postLikeResponse.content) {
        setLikeId(postLikeResponse.content[0].likeId);
      }
    })();
  }, []);

  return (
    <S.Container>
      <S.TagContainer className="tag_container">
        <S.PostTypeTag>{category}</S.PostTypeTag>
        {myProfile?.memberId === postData?.writerId && (
          <EditButton
            updateContent={updateContent}
            deleteContent={() => setAlertOpen(true)}
          />
        )}
      </S.TagContainer>
      <S.ContentContainer>
        <S.Title>{postData?.title}</S.Title>
        <S.InfoBox>
          <S.ProfileImage
            src={
              postData?.imagePath
                ? postData.imagePath
                : "/svg/default-profile-icon.svg"
            }
            alt="user_profile_image"
          />
          <S.InfoText>{postData?.writerNickname}</S.InfoText>
          <S.LevelLabel
            $advanced={postData?.writerTier.fitnessLevel === "ADVANCED"}
          >
            Lv. {postData?.writerTier.tier}
          </S.LevelLabel>
          <S.InfoText>{postData && getData(postData.createDate)}</S.InfoText>
        </S.InfoBox>
        <S.MainContent>{postData?.content}</S.MainContent>
        <S.TagContainer>
          <S.InfoBox>
            <S.IconBox>
              <img src={"/svg/view-icon.svg"} alt="icon_view_count" />
              <S.InfoText>{postData?.viewCount}</S.InfoText>
            </S.IconBox>
            <S.IconBox>
              <img src={"/svg/heart-icon.svg"} alt="icon_like_count" />
              <S.InfoText>{postData?.likeCount}</S.InfoText>
            </S.IconBox>
            <S.IconBox>
              <img src={"/svg/comment-icon.svg"} alt="icon_comment_count" />
              <S.InfoText>{postData?.commentCount}</S.InfoText>
            </S.IconBox>
          </S.InfoBox>
          <S.FavoriteBtn
            src={likeId ? "/svg/heart-fill-icon.svg" : "/svg/heart-icon.svg"}
            $fill={likeId !== null}
            onClick={changeLike}
          />
        </S.TagContainer>
      </S.ContentContainer>
    </S.Container>
  );
}

// export default PostContent;
