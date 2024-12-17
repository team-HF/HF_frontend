import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
`;
export const Title = styled.span`
  display: flex;
  align-items: center;
  height: 1.875rem;
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
