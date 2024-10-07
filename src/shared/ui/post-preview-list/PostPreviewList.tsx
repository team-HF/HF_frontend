import * as s from "./style";
import { useNavigate } from "react-router-dom";

interface PostPreviewListProps {
  data: {
    id: number;
    category: string;
    title: string;
    description: string;
    timestamp: string;
    view: number;
    heart: number;
    comment: number;
  };
}

export default function PostPreviewList({ data }: PostPreviewListProps) {
  const navigate = useNavigate();
  return (
    <s.PostPreviewContainer
      onClick={() => navigate(`/community/post-detail/${data.id}`)}
    >
      <s.CategoryWrapper>
        <s.CategoryText>{data.category}</s.CategoryText>
      </s.CategoryWrapper>
      <s.TitleContainer>
        <s.TitleText>{data.title}</s.TitleText>
        <s.TimeStampText>{data.timestamp}</s.TimeStampText>
      </s.TitleContainer>
      <s.DescriptionContainer>{data.description}</s.DescriptionContainer>
      <s.IconContainer>
        <s.ViewWrapper>
          <s.StyledIcon src="/svg/view-icon.svg" alt="view-icon" />
          <s.StyledIconText>{data.view}</s.StyledIconText>
        </s.ViewWrapper>
        <s.HeartWrapper>
          <s.StyledIcon src="/svg/heart-icon.svg" alt="heart-icon" />
          <s.StyledIconText>{data.heart}</s.StyledIconText>
        </s.HeartWrapper>
        <s.CommentWrapper>
          <s.StyledIcon src="svg/comment-icon.svg" alt="comment-icon" />
          <s.StyledIconText>{data.comment}</s.StyledIconText>
        </s.CommentWrapper>
      </s.IconContainer>
    </s.PostPreviewContainer>
  );
}
