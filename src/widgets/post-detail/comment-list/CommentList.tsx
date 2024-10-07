import CommentCard from "../comment-card/CommentCard";
import * as S from "./style";

const commentData = Array(5).fill({
  commentId: 1,
  displayName: "닉네임",
  comment:
    "내용 내용 내용 내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용내용 내용 내용",
  timeStamp: "2024.01.11",
});

const CommentList = () => {
  const commentList = commentData.map((data, idx) => (
    <CommentCard key={`post_comment_${idx}`} commentData={data} />
  ));
  return <S.Container>{commentList}</S.Container>;
};

export default CommentList;
