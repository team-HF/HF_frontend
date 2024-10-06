import * as s from "./style";

interface PostPreviewListProps {
  data: {
    category: string;
    title: string;
    description: string;
    timestamp: string;
    view: string;
    heart: string;
    comment: string;
  };
}

export default function PostPreviewList({ data }: PostPreviewListProps) {
  return (
    <s.PostPreviewContainer>
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
