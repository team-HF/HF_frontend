import * as s from "./style";
import { useNavigate } from "react-router-dom";

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
  );
}
