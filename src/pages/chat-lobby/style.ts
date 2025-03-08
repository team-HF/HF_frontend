import styled from 'styled-components';
import { theme } from '../../app/theme';

export const Container = styled.div`
  width: 22.5rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 40rem;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
`;
export const NoMatchingChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 68px;
  margin-top: 15rem;
`;
export const NoMatchingChatMainText = styled.span`
  font-size: 18px;
  font-weight: 700;
  font: ${theme.fontSize.headline_1};
  margin-bottom: 10px;
  color: #8e8e93;
`;
export const NoMatchingChatSubText = styled.span`
  font-size: 12px;
  font-weight: 400;
  font: ${theme.fontSize.cation_1};
  color: #8e8e93;
`;

export const FilterContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 8px;
`;

export const FilterButton = styled.div`
  display: flex;
  width: 140px;
  height: 32px;
  padding: 8px 16px;
  background-color: #fff;
  border: 1px solid #cfc4fb;
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
  font-size: 14px;
  color: #000000;
  margin-left: auto;
  margin-right: 20px;

  &:hover {
    background-color: #e9e4fc;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  box-shadow: 4px 4px 8px 0px #00000040;
  z-index: 101;
  top: 120%;
  right: 20px;
  border: 1px solid #cfc4fb;
  width: 140px;
  height: 136px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const DropdownItem = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  line-height: 22.01px;
  font-weight: 400;
  color: #000000;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #e9e4fc;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #cfc4fb;
  }
`;

export const DropdownArrowWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;
