import * as S from "./style";
import { useState } from "react";
import { useParams } from "react-router-dom";
import postComment from "./api/usePostComment";
import InputComment from "../../../shared/ui/input_comment/InputComment";

const CommentInput = () => {
  const { id } = useParams();
  const postId = Number(id);
  const [commentValue, setCommentValue] = useState<string>("");
  const sendComment = () =>
    postComment({
      postId: postId,
      commentValue: commentValue,
    });
  return (
    <S.Container>
      <S.Title>댓글</S.Title>
      <InputComment
        commentValue={commentValue}
        setCommentValue={setCommentValue}
        sendComment={sendComment}
      />
    </S.Container>
  );
};

export default CommentInput;
