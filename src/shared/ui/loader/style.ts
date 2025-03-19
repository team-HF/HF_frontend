import styled, { keyframes } from "styled-components";
import { theme } from "../../../app/theme";

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7);
`;

export const Content = styled.div`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, ${theme.colors.main} 94%, #0000)
      top/8px 8px no-repeat,
    conic-gradient(#0000 30%, ${theme.colors.main});
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: ${rotate} 1s infinite linear;
`;
