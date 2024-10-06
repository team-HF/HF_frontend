import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0.625rem 1.25rem;
  width: 22.5rem;
  @media (min-width: 768px) and (max-width: 1919px) {
    width: 48rem;
    padding: 0.625rem 4rem;
  }
  @media (min-width: 1920px) {
    width: 67.5rem;
  }
`;
export const LabelContainer = styled.div`
`;
