import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0.5rem 1.25rem;
  width: 22.5rem;
  @media (min-width: 768px) and (max-width: 1919px) {
    width: 40rem;
    padding: 0.5rem 0;
  }
`;
export const Title = styled.span`
  font-size: 22px;
  font-weight: 700;
  line-height: 1.364rem;
  letter-spacing: -0.019rem;
`;
