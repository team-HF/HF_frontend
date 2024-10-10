import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  max-width: 24.375rem;
  width: 100%;
  align-items: center;
  bottom: 0;
  justify-content: space-between;
  padding: 0.8125rem 3.5rem;
  box-shadow: 7px 0px 11px 0px #00000026;
  background: ${({ theme }) => theme.colors.linear};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const WriteIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const ChatIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
export const HomeIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const MyPageIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
