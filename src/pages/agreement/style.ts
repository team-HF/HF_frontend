import styled from "styled-components";
import { theme } from "../../app/theme";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
`;
export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20rem;
  gap: 3rem;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;
export const Title = styled.h2`
  font-size: 1.75rem;
  line-height: 1.358rem;
  letter-spacing: -0.0236rem;
  font-weight: bold;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;
export const AgreementItemContainer = styled.div`
  display: flex;
  align-items: center;
  &.space_between {
    justify-content: space-between;
  }
  &.gap_8 {
    gap: 0.5rem;
  }
`;
export const IconBtn = styled.button`
  display: flex;
  justify-content: center;
  border: 0;
  background-color: ${theme.colors.white};
  cursor: pointer;
`;
export const AgreeAllCheckText = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.0057rem;
  font-weight: bold;
`;
export const TermContentText = styled.span`
  font-size: 0.938rem;
  line-height: 1.467rem;
  letter-spacing: -0.0096rem;
  &.require_text {
    font-weight: bold;
    color: ${theme.colors.main};
  }
`;
export const MoreBtn = styled.button`
  border: 0;
  font-size: 0.938rem;
  line-height: 1.467rem;
  letter-spacing: -0.0096rem;
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray5};
  cursor: pointer;
`;
export const CheckListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const Divider = styled.div`
  display: flex;
  border-bottom: 1px solid ${theme.colors.gray3};
`;
export const DoneBtn = styled.button`
  width: 100%;
  height: 3rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: ${theme.colors.main};
  color: ${theme.colors.white};
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.03rem;
  font-size: bold;
  cursor: pointer;
  &:disabled {
    background-color: ${theme.colors.gray3};
    color: ${theme.colors.gray5};
  }
`;
