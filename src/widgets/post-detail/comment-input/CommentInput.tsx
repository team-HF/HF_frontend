import * as S from "./style";
import { useState } from "react";
import { useParams } from "react-router-dom";
import postComment from "./api/usePostComment";
import InputComment from "../../../shared/ui/input_comment/InputComment";
import { useMyProfileStore } from "../../../shared/store/my-profile-store";
import useSetRequireModal from "../../../shared/utils/useSetRequireModal";

const CommentInput = () => {
  const { id } = useParams();
  const postId = Number(id);
  const { myProfile } = useMyProfileStore();
  const setRequireModal = useSetRequireModal();

  const [commentValue, setCommentValue] = useState<string>("");

  const clickSendBtn = () => {
    const sendComment = async () => {
      await postComment({
        writerId: myProfile?.memberId,
        postId: postId,
        commentValue: commentValue,
      });
    };
    setRequireModal(sendComment);
  };

  return (
    <S.Container>
      <S.Title>댓글</S.Title>
      <InputComment
        tagName={null}
        commentValue={commentValue}
        setCommentValue={setCommentValue}
        sendComment={clickSendBtn}
      />
    </S.Container>
  );
};

export default CommentInput;
