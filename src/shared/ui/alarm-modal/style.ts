import styled from "styled-components";
import { theme } from "../../../app/theme";

export const AlarmModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(0.125rem);
  z-index: 1000;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.75rem;
  height: 100%;
  background-color: white;
  @media (min-width: 768px) {
    width: 25rem;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  padding: 1rem;
  height: 2.875rem;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 1.25rem;
  line-height: 1.364rem;
  letter-spacing: -0.0194rem;
  font-weight: 700;
`;
export const IconBtn = styled.button`
  border: 0;
  background-color: ${theme.colors.white};
  width: 1.125rem;
  height: 1.125rem;
`;
export const CloseIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;
export const CategoryContainer = styled.div`
  display: flex;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
  gap: 0.375rem;
`;
export const CategoryTag = styled.button<{ $isValidValue: boolean }>`
  display: flex;
  border: 1px solid ${theme.colors.gray3};
  border-radius: 2rem;
  background-color: ${({ $isValidValue }) =>
    $isValidValue ? theme.colors.main : theme.colors.white};
  color: ${({ $isValidValue }) =>
    $isValidValue ? theme.colors.white : theme.colors.gray5};
  font-size: 0.875rem;
  line-height: 1rem;
  letter-spacing: -0.01rem;
  font-weight: 600;
  padding: 0.5rem 0.625rem;
`;
export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem 3rem 0.5rem;
  gap: 1rem;
  height: 800px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
