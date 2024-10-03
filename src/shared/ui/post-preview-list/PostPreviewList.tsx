import * as S from './style';

export default function PostPreviewList() {
  const data = {
    category: '카테고리',
    title: '대제목',
    description:
      '최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄',
    timestamp: '1시간 전',
    view: '12',
    heart: '14',
    comment: '13',
  };

  return (
    <S.PostPreviewContainer>
      <S.CategoryWrapper>
        <S.CategoryText>{data.category}</S.CategoryText>
      </S.CategoryWrapper>
      <S.TitleContainer>
        <S.TitleText>{data.title}</S.TitleText>
        <S.TimeStampText>{data.timestamp}</S.TimeStampText>
      </S.TitleContainer>
      <S.DescriptionContainer>{data.description}</S.DescriptionContainer>
      <S.IconContainer>
        <S.ViewWrapper>
          <S.StyledIcon src="/svg/view-icon.svg" alt="view-icon" />
          <S.StyledIconText>{data.view}</S.StyledIconText>
        </S.ViewWrapper>
        <S.HeartWrapper>
          <S.StyledIcon src="/svg/heart-icon.svg" alt="heart-icon" />
          <S.StyledIconText>{data.heart}</S.StyledIconText>
        </S.HeartWrapper>
        <S.CommentWrapper>
          <S.StyledIcon src="svg/comment-icon.svg" alt="comment-icon" />
          <S.StyledIconText>{data.comment}</S.StyledIconText>
        </S.CommentWrapper>
      </S.IconContainer>
    </S.PostPreviewContainer>
  );
}
