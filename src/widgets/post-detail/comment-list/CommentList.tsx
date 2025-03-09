import * as S from "./style";
import CommentCard from "../comment-card/CommentCard";
import { TComment } from "../../../shared/types/community";

interface commentListProps {
  comments: TComment[] | null;
}

const CommentList = ({ comments }: commentListProps) => {
  const commentList = () => {
    if (!comments) return [];
    return comments.map((data, idx) => (
      <CommentCard key={`post_comment_${idx}`} {...data} />
    ));
  };

  return <S.Container>{commentList()}</S.Container>;
};

export default CommentList;
