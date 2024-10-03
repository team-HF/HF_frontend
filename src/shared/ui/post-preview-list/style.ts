import styled from 'styled-components';

export const PostPreviewContainer = styled.div`
  display: flex;
  width: 20rem;
  height: 10.4375rem;
  gap: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f3f5;
  flex-direction: column;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  width: 2.875rem;
  height: 1.375rem;
  padding: 0.375rem;
  border-radius: 24px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.main};
  white-space: nowrap;
`;

export const CategoryText = styled.p`
  font-size: 0.625rem;
  font-weight: 500;
  line-height: 0.625rem;
  letter-spacing: -0.0313rem;
  color: #ffffff;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 1.5rem;
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
  -webkit-box-orient: vertical; /* 수직 방향으로 정렬 */
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  height: 2.9375rem;
  line-height: 1.2rem;
  font-size: 0.875rem;
  color: #4d4d4d;
  font-weight: 400;
  letter-spacing: -0.005rem;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1.125rem;
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
