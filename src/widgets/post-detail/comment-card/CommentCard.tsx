import { useGetDate } from "../../../shared/utils/useGetDate";
import { Comment } from "../comment-list/CommentList";
import * as S from "./style";

interface CommentData {
  data: Comment;
}

const CommentCard = ({ data }: CommentData) => {
  const like = false; // 수정필요
  return (
    <S.Container>
      <S.InfoText>{data.writerId}</S.InfoText>
      <S.Comment>{data.content}</S.Comment>
      <S.InfoBox>
        <S.InfoText>{useGetDate(data.creationTime)}</S.InfoText>
        {like ? (
          <S.FavoriteBtn src={"/svg/heart-fill-icon.svg"} />
        ) : (
          <S.NonFavorite src={"/svg/heart-icon.svg"} />
        )}
      </S.InfoBox>
    </S.Container>
  );
};

export default CommentCard;
