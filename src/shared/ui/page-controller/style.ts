import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const Circle = styled.div<{
    $current_page: number;
  value: number;
  onClick: () => void;
}>`
  width: 8px;
  height: 8px;
  margin: 0px 4px;
  border-radius: 50%;
  background-color: ${({ $current_page, value }) =>
    $current_page === value ? "white" : "rgba(0, 0, 0, 0.3)"};
`;
