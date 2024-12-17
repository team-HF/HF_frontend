import styled from "styled-components";
import { theme } from "../../../app/theme";
export const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 0;
  box-shadow: 7px 0px 11px 0px #00000026;
  @media (min-width: 768px) {
    width: 48rem;
  }
`;

export const NavBtn = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background: ${theme.colors.main};
  height: 3.5rem;
  &:first-child {
    border-top-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
  }
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
