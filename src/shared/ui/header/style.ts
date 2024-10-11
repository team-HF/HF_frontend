import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 3.125rem;
  align-items: center;
  gap: 0.625rem;
  justify-content: space-between;
  padding: 0.5rem 1.25rem;
`;

export const HeaderText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.heading_1.fontSize};
  line-height: ${({ theme }) => theme.fontSize.heading_1.lineHeight};
  letter-spacing: ${({ theme }) => theme.fontSize.heading_1.letterSpacing};
  font-weight: bold;
`;

export const IconWrapper = styled.div`
  width: 2.75rem;
  height: 1.125rem;
`;
export const BellIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  cursor: pointer;
  margin-right: 0.5rem;
`;

export const MenuIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  cursor: pointer;
`;
