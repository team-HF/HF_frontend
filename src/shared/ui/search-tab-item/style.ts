import styled from 'styled-components';

export const SearchTabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 2.875rem;
  height: 2.75rem;
  padding: 0.625rem;
  top: 1.25rem;
  left: 1.25rem;
  gap: 0.625rem;
  letter-spacing: -0.0031rem;
  cursor: pointer;

  &:hover {
    border-image-source: ${({ theme }) => theme.colors.linear};
    border-image-slice: 1;
    border-bottom: 2px solid;
  }
`;

export const TabText = styled.span`
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 0.9375rem;
  color: #888888;

  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }
`;
