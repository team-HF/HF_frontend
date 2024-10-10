import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 2.875rem;
  gap: 0.625rem;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
  height: 1.875rem;
  padding: 1.25rem 0.5rem;
`;
export const IconWrapper = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
export const StyledTitle = styled.span`
  font: ${({ theme }) => theme.fontSize.heading_1};
  font-size: 22px;
  font-weight: bold;
  margin-left: 0.5rem;
`;
