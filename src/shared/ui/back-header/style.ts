import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 22.5rem;
  height: 2.5rem;
  gap: 0.625rem;
  padding: 8px 0px;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.875rem;
  padding: 16px 0px;
  @media (min-width: 768px) {
    width: 40rem;
  }
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
