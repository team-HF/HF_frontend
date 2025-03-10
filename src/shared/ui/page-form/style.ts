import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ChildrenContainer = styled.div<{ $isGNB: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 4.5rem;
`;
