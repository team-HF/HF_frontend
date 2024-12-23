import * as S from "./style";
import { useState } from "react";
import { useParams } from "react-router-dom";
import postComment from "./api/usePostComment";
import InputComment from "../../../shared/ui/input_comment/InputComment";
import { useMyProfileStore } from "../../../shared/store/my-profile-store";

const CommentInput = () => {
  const { id } = useParams();
  const postId = Number(id);
  const { myProfile } = useMyProfileStore();
  const [commentValue, setCommentValue] = useState<string>("");

  const sendComment = async () => {
    const response = await postComment({
      writerId: myProfile?.memberId,
      postId: postId,
      commentValue: commentValue,
    });
    if (response.statusCode === 201) {
      window.location.reload();
    }
  };

  return (
    <S.Container>
      <S.Title>댓글</S.Title>
      <InputComment
        tagName={null}
        commentValue={commentValue}
        setCommentValue={setCommentValue}
        sendComment={() => sendComment()}
      />
    </S.Container>
  );
};

export default CommentInput;
