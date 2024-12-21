import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  gap: 0.5rem;
`;
export const BackIcon = styled.img<{ src: string }>`
  width: 1.5rem;
  height: 1.5rem;
  transform: rotate(90deg);
`;
export const Title = styled.span`
  font-size: 22px;
  font-weight: 700;
  line-height: 1.364rem;
  letter-spacing: -0.019rem;
`;
