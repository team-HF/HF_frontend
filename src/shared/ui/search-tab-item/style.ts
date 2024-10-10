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
  letter-spacing: -0.0031rem;
  cursor: pointer;
  ${({ id, $current_filter }) =>
    id === $current_filter &&
    css`
      border-image-source: ${({ theme }) => theme.colors.linear};
      border-image-slice: 1;
      border-bottom: 2px solid;
    `};
`;
export const TabText = styled.span<{ id: string; $current_filter: string }>`
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 0.9375rem;
  color: ${({ id, $current_filter, theme }) =>
    id === $current_filter ? theme.colors.main : "#888888"};
`;
