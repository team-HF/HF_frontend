<<<<<<< HEAD
import * as s from "./style";
import { useNavigate } from "react-router-dom";
=======
import * as S from './style';
>>>>>>> dev

interface PostPreviewListProps {
  data: {
    postId: number;
    category: string;
    title: string;
    content_part: string;
    creation_time: string;
    view_count: number;
    like_count: number;
    comment_count: number;
    fitnessLevel: string;
  };
}

export default function PostPreviewList({ data }: PostPreviewListProps) {
  const navigate = useNavigate();
  return (
<<<<<<< HEAD
    <s.PostPreviewContainer
      onClick={() => navigate(`/community/post-detail/${data.postId}`)}
    >
      <s.CategoryWrapper>
        <s.CategoryText>{data.category}</s.CategoryText>
      </s.CategoryWrapper>
      <s.TitleContainer>
        <s.TitleText>{data.title}</s.TitleText>
        <s.TimeStampText>{data.creation_time}</s.TimeStampText>
      </s.TitleContainer>
      <s.DescriptionContainer>{data.content_part}</s.DescriptionContainer>
      <s.IconContainer>
        <s.ViewWrapper>
          <s.StyledIcon src="/svg/view-icon.svg" alt="view-icon" />
          <s.StyledIconText>{data.view_count}</s.StyledIconText>
        </s.ViewWrapper>
        <s.HeartWrapper>
          <s.StyledIcon src="/svg/heart-icon.svg" alt="heart-icon" />
          <s.StyledIconText>{data.like_count}</s.StyledIconText>
        </s.HeartWrapper>
        <s.CommentWrapper>
          <s.StyledIcon src="svg/comment-icon.svg" alt="comment-icon" />
          <s.StyledIconText>{data.comment_count}</s.StyledIconText>
        </s.CommentWrapper>
      </s.IconContainer>
    </s.PostPreviewContainer>
=======
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
>>>>>>> dev
  );
}
