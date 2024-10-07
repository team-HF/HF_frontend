import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.25rem;
  width: 22.5rem;
  @media (min-width: 768px) and (max-width: 1919px) {
    padding: 0.5rem 0;
    width: 40rem;
  }
`;
export const BackIcon = styled.img<{ src: string }>`
  width: 1.5rem;
  height: 1.5rem;
  transform: rotate(90deg);
  margin-right: 0.5rem;
`;
export const Title = styled.span`
  font-size: 1.375rem;
  letter-spacing: -0.019rem;
  line-height: 1.364rem;
  font-weight: 700;
`;
