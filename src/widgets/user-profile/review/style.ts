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
  &.align_items_center {
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
  &.gap_16{
    gap : 1rem;
  }
  &.gap_24 {
    gap: 1.5rem;
  }
`;
export const Title = styled.h3`
  font-size: 1.063rem;
  line-height: 1.412rem;
  &.review_point {
    color: ${theme.colors.main};
  }
`;
export const ReviewCount = styled.span`
  font-size: 0.75rem;
  line-height: 1.273rem;
  letter-spacing: -0.0031rem;
`;
export const Divider = styled.div`
  flex: 1;
  border-top: 1px solid ${theme.colors.gray3};
  border-radius: 0.5rem;
`;
export const ReviewGraphContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const GraphBackground = styled.div<{ percentage: number }>`
  position: relative;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: ${({ percentage }) => `conic-gradient(
    #ff9200 ${percentage}% 0%,
    ${theme.colors.main} 0%
  )`};
`;
export const GraphFront = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 4.25rem;
  height: 4.25rem;
  border-radius: 50%;
  background-color: ${theme.colors.white};
  z-index: 2;
`;
export const ElementText = styled.span`
  font-size: 0.938rem;
  line-height: 1.467rem;
  letter-spacing: -0.0096rem;
  font-weight: 500;
  &.positive {
    color: ${theme.colors.main};
  }
  &.negative {
    color: #ff9200;
  }
`;
export const PositiveReviewCard = styled.div<{ positive: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  background-color: ${({ positive }) => (positive ? "#F0ECFE" : "#FFF4E6")};
`;
export const ReviewCardText = styled.span`
  font-size: 0.75rem;
  line-height: 1.334rem;
  letter-spacing: -0.0025rem;
  font-weight: 500;
`;
export const DetailBtn = styled.button`
  padding: 0.5rem 1.25rem;
  border: 0;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  line-height: 1.273rem;
  letter-spacing: -0.0031rem;
  font-weight: 500;
  background-color: ${theme.colors.gray2};
  color: ${theme.colors.gray5};
`;
