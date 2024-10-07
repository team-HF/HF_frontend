import * as S from "./style";

interface commentDataProps {
  commentData: {
    displayName: string;
    comment: string;
    timeStamp: string;
    favorite: boolean;
  };
}

const CommentCard = ({ commentData }: commentDataProps) => {
  return (
    <S.Container>
      <S.InfoText>{commentData.displayName}</S.InfoText>
      <S.Comment>{commentData.comment}</S.Comment>
      <S.InfoBox>
        <S.InfoText>{commentData.timeStamp}</S.InfoText>
        {commentData.favorite ? (
          <S.FavoriteBtn src={"public/svg/heart-fill-icon.svg"} />
        ) : (
          <S.NonFavorite src={"public/svg/heart-icon.svg"} />
        )}
      </S.InfoBox>
    </S.Container>
  );
};

export default CommentCard;
