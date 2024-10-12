import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const TagContainer = styled.div`
  display: flex;
  padding: 0.625rem 0;
  width: 20rem;
  @media (min-width: 768px) and (max-width: 1919px) {
    padding: 0.625rem 0rem;
    width: 40rem;
  }
`;
export const PostTypeTag = styled.span`
  display: flex;
  padding: 0.375rem;
  border-radius: 1.5rem;
  font-size: 10px;
  letter-spacing: 0.031rem;
  background-color: ${theme.colors.main};
  color: ${theme.colors.white};
`;
export const ContentContainer = styled.div`
  padding: 0.5rem 0;
  width: 20rem;
  border-top: 1px solid #f1f3f5;
  border-bottom: 1px solid #f1f3f5;
  @media (min-width: 768px) and (max-width: 1919px) {
    width: 40rem;
  }
`;
export const Title = styled.h3`
  font-size: 17px;
  font-weight: 700;
  line-height: 1.712rem;
`;
export const InfoBox_1 = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;
export const InfoText = styled.span`
  font-size: 11px;
  line-height: 1.273rem;
  letter-spacing: -0.003rem;
  color: #8e8e93;
  margin-right: 0.5rem;
  &:last-child {
    margin: 0;
  }
`;
export const MainContent = styled.p`
  margin: 1rem 0;
  font-size: 14px;
  line-height: 1.5rem;
  letter-spacing: -0.005rem;
  color: #4d4d4d;
`;
export const InfoBox_2 = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const IconBox = styled.div`
  display: flex;
  margin-right: 0.5rem;
  &:last-child {
    margin: 0;
  }
`;
export const InfoIcon = styled.img`
  margin-right: 0.25rem;
`;
