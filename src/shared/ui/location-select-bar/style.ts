import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Label = styled.label`
  font-size: 1.063rem;
  line-height: 1.412rem;
  font-weight: bold;
`;
export const LocationContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
export const Input = styled.input`
  padding: 0.625rem;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #ededed;
  font-size: 0.938rem;
  line-height: 1.467rem;
  letter-spacing: -0.0096rem;
  &:focus {
    outline: none;
  }
  &:disabled {
    background-color: ${theme.colors.white};
  }
`;
export const ResetBtn = styled.button`
  position: absolute;
  right: 0.25rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.25rem;
  border: 1px solid #cccccc;
  border-radius: 0.5rem;
  background-color: ${theme.colors.white};
  font-size: 0.75rem;
`;

export const LocationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.25rem;
  max-height: 13.75rem;
  overflow: scroll;
  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`;
export const LocationCard = styled.button`
  width: 9.875rem;
  padding: 0.375rem 0.25rem;
  border: 1px solid #ededed;
  border-radius: 0.5rem;
  font-size: 0.938rem;
  line-height: 1.467rem;
  letter-spacing: -0.0096rem;
  background-color: ${theme.colors.white};
  @media (min-width: 768px) {
    width: 9.625rem;
  }
`;
