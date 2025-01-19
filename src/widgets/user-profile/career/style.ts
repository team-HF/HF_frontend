import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0 0.75rem 0;
  gap: 1rem;
`;
export const Box = styled.div`
  display: flex;
  &.align_items {
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
  &.gap_24 {
    gap: 1.5rem;
  }
`;
export const Title = styled.h3`
  font-size: 1.063rem;
  line-height: 1.412rem;
`;
export const Divider = styled.div`
  flex: 1;
  border-top: 1px solid ${theme.colors.gray3};
  border-radius: 0.5rem;
`;
export const SpecTitle = styled.span`
  font-size: 0.938rem;
  line-height: 1.467rem;
  letter-spacing: -0.0096rem;
  font-weight: 700;
`;
export const SpecPeriod = styled.span`
  font-size: 0.75rem;
  line-height: 1.334rem;
  letter-spacing: -0.0025rem;
  font-weight: 500;
`;
export const SpecDescription = styled.p`
  font-size: 0.75rem;
  line-height: 1.334rem;
  letter-spacing: -0.0025rem;
`;
