import * as S from "./style";
import { useGetDate } from "../../../shared/utils/useGetDate";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getPostDetail from "./api/useGetPostDetail";
import { useGetUserData as getUserData } from "../../../shared/api/useGetUserData";
import EditButton from "../../../shared/ui/edit-button/EditButton";

export type TFitnessLevel = "ADVANCED" | "BEGINNER";

interface userData {
  nickname: string;
  profileImageUrl: string;
  fitnessLevel: TFitnessLevel;
  tier: number;
}
interface PostData {
  postId: number;
  postCategory: string;
  memberId: number;
  title: string;
  content: string;
  createDate: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
}

const PostContent = () => {
  const { id } = useParams();
  const postId = Number(id);
  const [userData, setUserData] = useState<userData>({
    nickname: "알 수 없는 사용자",
    profileImageUrl: "",
    fitnessLevel: "BEGINNER",
    tier: 1,
  });
  const [postData, setPostData] = useState<PostData>({
    postId: 0,
    postCategory: "알 수 없음",
    memberId: 0,
    title: "알 수 없음",
    content: "내용을 가져오는데 실패하였습니다.",
    createDate: "",
    viewCount: 0,
    likeCount: 0,
    commentCount: 0,
  });
  useEffect(() => {
    (async () => {
      const postResponse = await getPostDetail(postId);
      setPostData(postResponse.content);
      const userResponse = await getUserData(postResponse.content.memberId);
      const {
        nickname,
        fitnessLevel,
        profileImageUrl,
        tier: { tier },
      } = userResponse.data.content;
      setUserData({ nickname, profileImageUrl, fitnessLevel, tier });
    })();
  }, [postId]);
  return (
    <S.Container>
      <S.TagContainer className="tag_container">
        <S.PostTypeTag>{postData?.postCategory}</S.PostTypeTag>
        <EditButton />
      </S.TagContainer>
      <S.ContentContainer>
        <S.Title>{postData?.title}</S.Title>
        <S.InfoBox>
          <S.ProfileImage
            src={
              userData.profileImageUrl
                ? userData.profileImageUrl
                : "/svg/default-profile-icon.svg"
            }
            alt="user_profile_image"
          />
          <S.InfoText>{userData.nickname}</S.InfoText>
          <S.LevelLabel fitnessLevel={userData.fitnessLevel}>
            Lv. {userData.tier}
          </S.LevelLabel>
          <S.InfoText>{useGetDate(postData.createDate)}</S.InfoText>
        </S.InfoBox>
        <S.MainContent>{postData?.content}</S.MainContent>
        <S.TagContainer >
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
          <S.UnLikeICon src="/svg/heart-icon.svg" alt="like_icon" />
        </S.TagContainer>
      </S.ContentContainer>
    </S.Container>
  );
};

export default PostContent;
