import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 22.5rem;
  padding: 0.5rem 1.25rem;
  @media (min-width: 768px) and (max-width: 1919px) {
    width: 48rem;
    padding: 0.5rem 4rem;
  }
  @media (min-width: 1920px) {
    width: 67.5rem;
  }
`;
export const Title = styled.span`
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 1.364rem;
  letter-spacing: 0.019rem;
`;
export const AlarmIcon = styled.img<{ src: string }>`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;
export const MenuIcon = styled.img<{ src: string }>`
  width: 18px;
  height: 18px;
`;
export const CloseIcon = styled.img<{ src: string }>`
  width: 18px;
  height: 18px;
`;
