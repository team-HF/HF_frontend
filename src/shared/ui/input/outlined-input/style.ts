import styled from "styled-components";

export const Container = styled.div<{ disabled: boolean }>`
  border: 1px solid ${(props) => (props.disabled ? "#EDEDED" : "#6541f2")};
  background-color: ${(props) => (props.disabled ? "#F8F8F8" : "white")};
  border-radius: 8px;
  padding: 10px;
`;
export const Value = styled.input`
  width: 100%;
  border: 0px;
  font-size: 16px;
  font-weight: 600;
  &:focus {
    outline: 0px;
  }
`;
