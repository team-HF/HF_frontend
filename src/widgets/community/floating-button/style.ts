import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.button`
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  padding: 16px;
  width: 3.5rem;
  height: 3.5rem;
  border: 0;
  background-color: ${theme.colors.white};
  border-radius: 3.5rem;
  box-shadow: 0 0.375rem 12px rgba(0, 0, 0, 0.12),
    0 0.25rem 8px rgba(0, 0, 0, 0.08), 0 0 4px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;
export const PencilIcon = styled.img`
  width: 24px;
  height: 24px;
`;
