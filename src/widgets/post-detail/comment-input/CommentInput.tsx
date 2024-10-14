import { useParams } from "react-router-dom";
import * as S from "./style";
import { useState } from "react";
import postComment from "./api/usePostComment";

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
      <S.InputContainer>
        <S.CommentInput
          placeholder="댓글을 입력하세요."
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
        />
        <S.SendBtn onClick={sendComment}/>
      </S.InputContainer>
    </S.Container>
  );
};

export default CommentInput;
