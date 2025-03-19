import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(0.125rem);
  z-index: 1000;
`;
export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 20rem;
  background-color: ${theme.colors.white};
`;
export const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5rem;
  letter-spacing: -0.0057rem;
`;
export const Contents = styled.p`
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.334rem;
  letter-spacing: -0.0025rem;
  overflow-wrap: break-word;
`;
export const BtnBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const CheckBtn = styled.button`
  background-color: ${theme.colors.main};
  border: 0;
  border-radius: 10rem;
  padding: 0.625rem;
  width: 6.25rem;
  color: ${theme.colors.white};
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: -0.01rem;
  &.cancel {
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.main};
    color: ${theme.colors.main};
  }
`;
