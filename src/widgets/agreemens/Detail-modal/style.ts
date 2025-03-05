import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.white};
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;
export const Box = styled.div`
  display: flex;
  width: 100%;
  &.header {
    height: 2.875rem;
  }
  &.space-between {
    justify-content: space-between;
  }
  &.align-center {
    align-items: center;
  }
  &.column {
    flex-direction: column;
  }
  &.scroll {
    overflow: scroll;
    flex: 1;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const IconBtn = styled.button`
  background-color: ${theme.colors.white};
  border: 0;
`;
export const CloseIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  transform: rotate(90deg);
`;
export const Text = styled.span`
  &.title {
    font-size: 1.125rem;
    line-height: 1.445rem;
    letter-spacing: -0.0002rem;
    font-weight: 600;
  }
  &.sub_title {
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: -0.0057rem;
    font-weight: 700;
  }
  &.content {
    font-size: 0.938rem;
    line-height: 1.467rem;
    letter-spacing: -0.0096rem;
    white-space: pre-line;
  }
  &.margin_bottom_16 {
    margin-bottom: 1rem;
  }
`;
export const Spacer = styled.div`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
`;
