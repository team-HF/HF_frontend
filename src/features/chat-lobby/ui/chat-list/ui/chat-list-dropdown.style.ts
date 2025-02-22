import { styled } from 'styled-components';

export const Dropdown = styled.div`
  position: absolute;
  box-shadow: 4px 4px 8px 0px #00000040;
  z-index: 101;
  border: 1px solid #cfc4fb;
  width: 140px;
  height: 68px;
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
