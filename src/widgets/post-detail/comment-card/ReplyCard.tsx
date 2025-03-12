import * as S from "./style";
import EditButton from "../../../shared/ui/edit-button/EditButton";
import InputComment from "../../../shared/ui/input_comment/InputComment";
import { TLike } from "../../../shared/types/community";
import { TReply } from "../../../shared/types/community";
import { useMyProfileStore } from "../../../shared/store/my-profile-store";
import { useEffect, useState } from "react";
import { useGetDate as getDate } from "../../../shared/utils/useGetDate";
import { useUpdateComment as updateComment } from "./api/useUpdateComment";
import { useDeleteComment as deleteComment } from "./api/useDeleteComment";
import { useGetCommentLike as getCommentLike } from "./api/useGetCommentLike";
import { useDeletePostLike as deletePostLike } from "../post-content/api/useDeletePostLike";
import { usePostCommentLike as postCommentLike } from "./api/usePostCommentLike";
import useSetRequireModal from "../../../shared/utils/useSetRequireModal";

interface ReplyProps {
  data: TReply;
  parentTag: boolean;
  setOpenInput: (name: string) => void;
}

const ReplyCard = ({ data, parentTag, setOpenInput }: ReplyProps) => {
  const { myProfile } = useMyProfileStore();
  const setRequireModal = useSetRequireModal();

  const [likeStatus, setLikeStatus] = useState<TLike | null>(null);
  const [commentUpdate, setCommentUpdate] = useState<boolean>(false);
  const [updateValue, setUpdateValue] = useState<string>(data.content);

  const clickLikeIcon = () => {
    const changeLike = async () => {
      if (likeStatus) {
        if (typeof likeStatus !== "number") {
          const response = await deletePostLike(likeStatus.likeId);
          if (response.statusCode === 200) {
            setLikeStatus(null);
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
    setRequireModal(changeLike);
  };

  const updateReplyState = () => {
    setUpdateValue(data.content);
    setCommentUpdate(true);
  };

  const clickUpdateDoneBtn = () => {
    const updateDone = async () => {
      if (updateValue) {
        await updateComment(data.commentId, updateValue);
      }
    };
    setRequireModal(updateDone);
  };

  const clickDeleteBtn = () => {
    const deleteCurrentReply = async () => {
      await deleteComment(data.commentId);
    };
    setRequireModal(deleteCurrentReply);
  };

  useEffect(() => {
    (async () => {
      const likeResponse = await getCommentLike(data.commentId);
      const isLike = likeResponse.content.filter(
        (likeData: { memberId: number }) =>
          likeData.memberId === myProfile?.memberId
      );
      if (isLike[0]) {
        setLikeStatus(isLike[0]);
      }
    })();
  }, []);

  return (
    <S.InputContainer>
      <img src="/svg/arrow-curve-icon.svg" alt="arrow_curved_icon" />
      <S.ReplyContainer>
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
              updateContent={updateReplyState}
              deleteContent={clickDeleteBtn}
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
              tagName={parentTag ? `@${data.parentWriterName}` : null}
              commentValue={updateValue}
              setCommentValue={setUpdateValue}
              sendComment={clickUpdateDoneBtn}
            />
          </S.UpdateBox>
        ) : parentTag ? (
          <S.CommentBox>
            <S.Comment className="mention">@{data.parentWriterName}</S.Comment>
            <S.Comment> {data.content}</S.Comment>
          </S.CommentBox>
        ) : (
          <S.Comment>{data.content}</S.Comment>
        )}
        <S.InfoBox_1>
          <S.CommentButton onClick={() => setOpenInput(data.writerNickname)}>
            답글 쓰기
          </S.CommentButton>
          <S.FavoriteBtn
            src={
              likeStatus ? "/svg/heart-fill-icon.svg" : "/svg/heart-icon.svg"
            }
            $fill={likeStatus !== null}
            onClick={clickLikeIcon}
          />
        </S.InfoBox_1>
      </S.ReplyContainer>
    </S.InputContainer>
  );
};

export default ReplyCard;
