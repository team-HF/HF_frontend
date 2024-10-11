import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 10px;
  height: 38px;
  border: 1px solid #cfc4fb;
  border-radius: 34px;
  cursor: pointer;
`;
export const ArrowIcon = styled.img`
  margin-right: 10px;
  &.arrow-up {
    transform: rotate(180deg);
  }
`;
export const CurrentFilter = styled.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.00875rem;
  color: ${theme.colors.main};
`;
export const FilterList = styled.div`
  position: absolute;
  top: 44px;
  left: 0px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border: 1px solid #cfc4fb;
  border-radius: 20px;
  cursor: pointer;
`;
export const Filter = styled.span`
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #cfc4fb;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.00875rem;
  color: ${theme.colors.main};
  &:last-child {
    border: 0px;
  }
`;
