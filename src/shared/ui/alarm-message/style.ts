import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0.75rem 2rem 0.75rem;
  border: 1px solid ${theme.colors.gray3};
  border-radius: 0.625rem;
  background-color: ${theme.colors.white};
`;
export const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  &.align_center {
    align-items: center;
  }
  &.column {
    flex-direction: column;
  }
  &.gap_4 {
    gap: 0.25rem;
  }
  &.gap_8 {
    gap: 0.5rem;
  }
`;
export const LogoImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;
export const Time = styled.span`
  width: 100%;
  text-align: end;
  font-size: 0.75rem;
  line-height: 1.273rem;
  letter-spacing: -0.0031rem;
  color: ${theme.colors.gray4};
`;
export const Title = styled.span`
  font-size: 1rem;
  line-height: 1.467rem;
  letter-spacing: -0.0096rem;
  font-weight: 700;
`;
export const Content = styled.span`
  font-size: 0.875rem;
  line-height: 1.273rem;
  letter-spacing: -0.0031rem;
  color: ${theme.colors.gray4};
`;
