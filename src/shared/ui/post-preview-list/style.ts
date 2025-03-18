import styled from "styled-components";

export const PostPreviewContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #dee2e6;
  flex-direction: column;
  cursor: pointer;
  &:first-child {
    border-top: 1px solid #dee2e6;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
`;

export const CategoryText = styled.span`
  padding: 0.375rem;
  border-radius: 1.5rem;
  font-size: 0.625rem;
  font-weight: 500;
  line-height: 0.625rem;
  letter-spacing: -0.0313rem;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
  align-items: center;
`;
export const TitleText = styled.p`
  color: #000000;
  font-size: 1.0625rem;
  line-height: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TimeStampText = styled.p`
  color: #8e8e93;
  font-size: 0.6875rem;
  font-weight: 400;
  line-height: 0.875rem;
  letter-spacing: -0.0031rem;
  white-space: nowrap;
`;

export const DescriptionContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  line-height: 1.5rem;
  font-size: 0.875rem;
  color: #4d4d4d;
  font-weight: 400;
  letter-spacing: -0.005rem;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.5rem;
  justify-content: right;
`;

export const ViewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 2.125rem;
  height: 1.125rem;
  gap: 0.25rem;
`;

export const HeartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 2.125rem;
  height: 1.125rem;
  gap: 0.25rem;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 2.125rem;
  height: 1.125rem;
  gap: 0.25rem;
`;

export const StyledIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  align-self: center;
`;
export const StyledIconText = styled.p`
  font-size: 0.6875rem;
  line-height: 0.875rem;
  font-weight: 400;
  letter-spacing: -0.0031rem;
  color: #8e8e8e;
  align-self: center;
`;
