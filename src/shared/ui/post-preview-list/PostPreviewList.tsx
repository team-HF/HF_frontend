import { useGetDate } from "../../utils/useGetDate";
import * as s from "./style";
import { useNavigate } from "react-router-dom";

interface PostPreviewListProps {
  data: {
    postId: number;
    category: string;
    title: string;
    content: string;
    creationTime: string;
    viewCount: number;
    likeCount: number;
    commentCount: number;
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
        <s.TimeStampText>{useGetDate(data.creationTime)}</s.TimeStampText>
      </s.TitleContainer>
      <s.DescriptionContainer>{data.content}</s.DescriptionContainer>
      <s.IconContainer>
        <s.ViewWrapper>
          <s.StyledIcon src="/svg/view-icon.svg" alt="view-icon" />
          <s.StyledIconText>{data.viewCount}</s.StyledIconText>
        </s.ViewWrapper>
        <s.HeartWrapper>
          <s.StyledIcon src="/svg/heart-icon.svg" alt="heart-icon" />
          <s.StyledIconText>{data.likeCount}</s.StyledIconText>
        </s.HeartWrapper>
        <s.CommentWrapper>
          <s.StyledIcon src="svg/comment-icon.svg" alt="comment-icon" />
          <s.StyledIconText>{data.commentCount}</s.StyledIconText>
        </s.CommentWrapper>
      </s.IconContainer>
    </s.PostPreviewContainer>
  );
}
