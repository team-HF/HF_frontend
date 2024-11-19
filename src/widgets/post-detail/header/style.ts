import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  width: 100%;
  gap: 0.625rem;
`;
export const BackIcon = styled.img<{ src: string }>`
  width: 1.5rem;
  height: 1.5rem;
  transform: rotate(90deg);
`;
export const Title = styled.span`
  display: flex;
  align-items: center;
  height: 1.875rem;
  font-size: 1.375rem;
  letter-spacing: -0.019rem;
  line-height: 1.364rem;
  font-weight: 700;
`;
