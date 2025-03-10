import * as S from "./style";
import ReplyCard from "./ReplyCard";
import EditButton from "../../../shared/ui/edit-button/EditButton";
import InputComment from "../../../shared/ui/input_comment/InputComment";
import { TComment, TLike } from "../../../shared/types/community";
import { useMyProfileStore } from "../../../shared/store/my-profile-store";
import { useEffect, useState } from "react";
import { useGetDate as getDate } from "../../../shared/utils/useGetDate";
import { usePostReply as postReply } from "./api/usePostReply";
import { useUpdateComment as updateComment } from "./api/useUpdateComment";
import { useDeleteComment as deleteComment } from "./api/useDeleteComment";
import { useGetCommentLike as getCommentLike } from "./api/useGetCommentLike";
import { useDeletePostLike as deletePostLike } from "../post-content/api/useDeletePostLike";
import { usePostCommentLike as postCommentLike } from "./api/usePostCommentLike";

const CommentCard = (data: TComment) => {
  const { myProfile } = useMyProfileStore();

  const [openInput, setOpenInput] = useState<boolean>(false);
  const [tagName, setTagName] = useState<string>("");
  const [replyValue, setReplyValue] = useState<string>("");
  const [likeStatus, setLikeStatus] = useState<TLike | number>(0);
  const [commentUpdate, setCommentUpdate] = useState<boolean>(false);
  const [updateValue, setUpdateValue] = useState<string>(data.content);

  const changeReplyInput = (name: string) => {
    if (openInput) {
      if (tagName !== "@" + name && data.replies.length >= 1) {
        setTagName("@" + name);
      } else {
        setOpenInput(false);
      }
    } else {
      if (data.replies.length >= 1) {
        setTagName("@" + name);
      }
      setOpenInput(true);
    }
  };

  const sendReply = async () => {
    const response = await postReply({
      postId: data.postId,
      writerId: myProfile?.memberId,
      content: replyValue,
      parentCommentId: data.commentId,
    });
    if (response.statusCode === 201) {
      window.location.reload();
    }
  };

  const changeLike = async () => {
    if (likeStatus) {
      if (typeof likeStatus !== "number") {
        const response = await deletePostLike(likeStatus.likeId);
        if (response.statusCode === 200) {
          setLikeStatus(0);
        }
      }
    } else {
      const response = await postCommentLike(
        data.commentId,
        myProfile?.memberId
      );
      if (response.statusCode === 201) {
        const likeData = {
          commentId: data.commentId,
          likeId: response.content as number,
          memberId: myProfile?.memberId as number,
        };
        setLikeStatus(likeData);
      }
    }
  };

  const updateCommentState = () => {
    setUpdateValue(data.content);
    setCommentUpdate(true);
  };

  const updateDone = async () => {
    if (updateValue) {
      const response = await updateComment(data.commentId, updateValue);
      if (response.status === 200) {
        window.location.reload();
      }
    }
  };

  const deleteCurrentComment = async () => {
    const response = await deleteComment(data.commentId);
    if (response.status === 200) {
      window.location.reload();
    }
  };

  useEffect(() => {
    (async () => {
      const likeResponse = await getCommentLike(data.commentId);
      if (likeResponse.content.length) {
        setLikeStatus(likeResponse.content[0]);
      }
    })();
  }, []);

  const commentList = data.replies.map((item, index) => (
    <ReplyCard
      key={`comment_reply_${item.commentId}`}
      data={item}
      parentTag={index >= 1 ? true : false}
      setOpenInput={changeReplyInput}
    />
  ));
  return (
    <S.Container>
      <S.InfoBox_1>
        <S.profileBox>
          <S.ProfileImage
            src={
              data.writerProfileImageUrl
                ? data.writerProfileImageUrl
                : "/svg/default-profile-icon.svg"
            }
            alt="profile_image"
          />
          <S.InfoText>{data.writerNickname}</S.InfoText>
          <S.LevelLabel
            $fitnessLevel={data?.writerTier.fitnessLevel === "ADVANCED"}
          >
            Lv. {data?.writerTier.tier}
          </S.LevelLabel>
          <S.InfoText>{getDate(data.creationTime)}</S.InfoText>
        </S.profileBox>
        {myProfile?.memberId === data.writerId && !commentUpdate ? (
          <EditButton
            updateContent={updateCommentState}
            deleteContent={deleteCurrentComment}
          />
        ) : commentUpdate ? (
          <S.Button onClick={() => setCommentUpdate(false)}>취소</S.Button>
        ) : (
          <></>
        )}
      </S.InfoBox_1>
      {commentUpdate ? (
        <S.UpdateBox>
          <InputComment
            tagName={null}
            commentValue={updateValue}
            setCommentValue={setUpdateValue}
            sendComment={updateDone}
          />
        </S.UpdateBox>
      ) : (
        <S.Comment>{data.content}</S.Comment>
      )}
      <S.InfoBox_1>
        <S.CommentButton onClick={() => changeReplyInput(data.writerNickname)}>
          답글 쓰기
        </S.CommentButton>
        <S.FavoriteBtn
          src={likeStatus ? "/svg/heart-fill-icon.svg" : "/svg/heart-icon.svg"}
          $fill={typeof likeStatus !== "number"}
          onClick={() => changeLike()}
        />
      </S.InfoBox_1>
      {commentList}
      {openInput && (
        <S.InputContainer>
          <img src="/svg/arrow-curve-icon.svg" alt="arrow_curved_icon" />
          <InputComment
            tagName={tagName}
            commentValue={replyValue}
            setCommentValue={setReplyValue}
            sendComment={sendReply}
          />
        </S.InputContainer>
      )}
    </S.Container>
  );
};

export default CommentCard;
