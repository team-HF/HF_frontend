import * as S from "./style";

interface InputCommentProps {
  tagName: string | null;
  commentValue: string;
  setCommentValue: React.Dispatch<React.SetStateAction<string>>;
  sendComment: () => void;
}

const InputComment = ({
  tagName,
  commentValue,
  setCommentValue,
  sendComment,
}: InputCommentProps) => {
  const changeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (tagName) {
      if (!value.startsWith(tagName)) {
        return;
      }
      setCommentValue(value.slice(tagName.length + 1));
    } else {
      setCommentValue(value);
    }
  };
  return (
    <S.InputContainer>
      {tagName ? (
        <S.CommentInput
          placeholder="댓글을 입력하세요."
          value={`${tagName} ${commentValue}`}
          onChange={(e) => changeValue(e)}
        />
      ) : (
        <S.CommentInput
          placeholder="댓글을 입력하세요."
          value={commentValue}
          onChange={(e) => changeValue(e)}
        />
      )}
      <S.SendBtn onClick={sendComment} />
    </S.InputContainer>
  );
};

export default InputComment;
