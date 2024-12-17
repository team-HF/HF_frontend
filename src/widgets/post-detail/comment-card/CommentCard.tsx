import { useState } from "react";
import EditButton from "../../../shared/ui/edit-button/EditButton";
import InputComment from "../../../shared/ui/input_comment/InputComment";
import { useGetDate as getDate } from "../../../shared/utils/useGetDate";
import { Comment } from "../comment-list/CommentList";
import * as S from "./style";
import postComment from "../comment-input/api/usePostComment";

interface CommentData {
  data: Comment;
}

const CommentCard = ({ data }: CommentData) => {
  const [openInput, setOpenInput] = useState<boolean>(false);
  const [commentValue, setCommentValue] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const sendComment = () =>
    postComment({
      postId: 0,
      commentValue: commentValue,
    });
  const myComment = true;
  const like = false; // 수정필요
  const commentList = comments.map((item) => (
    <S.InputContainer>
      <img src="/svg/arrow-curve-icon.svg" alt="arrow_curved_icon" />
      <S.Container>
        <S.InfoBox_1>
          <S.profileBox>
            <S.ProfileImage
              src="/svg/default-profile-icon.svg"
              alt="profile_image"
            />
            <S.InfoText>사용자</S.InfoText>
            <S.LevelLabel>Lv. 1</S.LevelLabel>
            <S.InfoText>{getDate(item.creationTime)}</S.InfoText>
          </S.profileBox>
          {myComment && <EditButton />}
        </S.InfoBox_1>
        <S.Comment>{data.content}</S.Comment>
        <S.InfoBox_1>
          <S.CommentButton onClick={() => setOpenInput(!openInput)}>
            답글 쓰기
          </S.CommentButton>
          {like ? (
            <S.FavoriteBtn src={"/svg/heart-fill-icon.svg"} />
          ) : (
            <S.NonFavorite src={"/svg/heart-icon.svg"} />
          )}
        </S.InfoBox_1>
      </S.Container>
    </S.InputContainer>
  ));
  return (
    <S.Container>
      <S.InfoBox_1>
        <S.profileBox>
          <S.ProfileImage
            src="/svg/default-profile-icon.svg"
            alt="profile_image"
          />
          <S.InfoText>사용자</S.InfoText>
          <S.LevelLabel>Lv. 1</S.LevelLabel>
          <S.InfoText>{getDate(data.creationTime)}</S.InfoText>
        </S.profileBox>
        {myComment && <EditButton />}
      </S.InfoBox_1>
      <S.Comment>{data.content}</S.Comment>
      <S.InfoBox_1>
        <S.CommentButton onClick={() => setOpenInput(!openInput)}>
          답글 쓰기
        </S.CommentButton>
        {like ? (
          <S.FavoriteBtn src={"/svg/heart-fill-icon.svg"} />
        ) : (
          <S.NonFavorite src={"/svg/heart-icon.svg"} />
        )}
      </S.InfoBox_1>
      {commentList}
      {openInput && (
        <S.InputContainer>
          <img src="/svg/arrow-curve-icon.svg" alt="arrow_curved_icon" />
          <InputComment
            commentValue={commentValue}
            setCommentValue={setCommentValue}
            sendComment={sendComment}
          />
        </S.InputContainer>
      )}
    </S.Container>
  );
};

export default CommentCard;
