import styled, { css } from "styled-components";

export const SearchTabContainer = styled.div<{
  id: string;
  $current_filter: string;
}>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0.625rem;
  cursor: pointer;
  ${({ id, $current_filter }) =>
    id === $current_filter &&
    css`
      border-image-source: ${({ theme }) => theme.colors.linear};
      border-image-slice: 1;
      border-bottom: 0.125rem solid;
    `};
`;
export const TabText = styled.span<{ id: string; $current_filter: string }>`
  font-size: 0.875rem;
  font-weight: ${({ id, $current_filter }) =>
    id === $current_filter ? 700 : 600};
  line-height: 1rem;
  letter-spacing: -0.031rem;
  color: ${({ id, $current_filter, theme }) =>
    id === $current_filter ? theme.colors.main : "#888888"};
`;
