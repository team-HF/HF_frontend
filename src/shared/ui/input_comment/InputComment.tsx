import * as S from "./style";

interface InputCommentProps {
  commentValue: string;
  setCommentValue: React.Dispatch<React.SetStateAction<string>>;
  sendComment: () => Promise<void>;
}

const InputComment = ({
  commentValue,
  setCommentValue,
  sendComment,
}: InputCommentProps) => {
  return (
    <S.InputContainer>
      <S.CommentInput
        placeholder="댓글을 입력하세요."
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
      />
      <S.SendBtn onClick={sendComment} />
    </S.InputContainer>
  );
};

export default InputComment;
