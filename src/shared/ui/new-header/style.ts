import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  display: flex;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;
export const Box = styled.div`
  display: flex;
  &.align_center {
    align-items: center;
  }
  &.gap_8 {
    gap: 0.5rem;
  }
`;
export const IconBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border: 0;
  background-color: ${theme.colors.white};
`;
export const BackIcon = styled.img`
  transform: rotate(-90deg);
`;
export const Title = styled.h2`
  font-size: 1.375rem;
  line-height: 1.364rem;
  letter-spacing: -0.0194rem;
  font-weight: 700;
`;
export const membershipBtn = styled.button`
  min-width: 3.625rem;
  padding: 0.25rem 0.75rem;
  border: 0;
  border-radius: 3rem;
  background-color: ${theme.colors.main};
  color: ${theme.colors.white};
  &.logout {
    border: 1px solid ${theme.colors.main};
    background-color: ${theme.colors.white};
    color: ${theme.colors.main};
  }
`;
