import styled from "styled-components";

export const ToggleSwitch = styled.label`
  width: 52px;
  height: 32px;
  display: block;
  position: relative;
  border-radius: 30px;
  background-color: #dee2e6;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
`;

export const ToggleButton = styled.span`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: white;
  transition: all 0.2s ease-in;
`;

export const Input = styled.input`
  display: none;

  &:checked + ${ToggleSwitch} {
    background-color: #6541f2;
  }

  &:checked + ${ToggleSwitch} ${ToggleButton} {
    left: calc(100% - 28px);
    background: white;
  }
`;
