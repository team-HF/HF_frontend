import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.875rem;
`;
export const Box_1 = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const IconBtn = styled.button`
  border: 0;
  background-color: ${theme.colors.white};
  width: 1.5rem;
  height: 1.5rem;
`;
export const ArrowImg = styled.img`
  transform: rotate(90deg);
`;
export const LogoBox = styled.div``;
export const Logo = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.03rem;
  &.highlight {
    font-weight: 900;
    color: ${theme.colors.main};
  }
`;
export const AlarmImg = styled.img``;
