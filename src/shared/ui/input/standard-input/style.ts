import styled from "styled-components";

export const Container = styled.div<{ error: boolean }>`
  border-bottom: 1px solid ${(props) => (props.error ? "#FE5454" : "#ededed")};
  padding: 10px;
`;
export const Value = styled.input`
width: 100%;
  font-size: 16px;
  font-weight: 600;
  border: 0px;
  &:focus {
    outline: 0px;
  }
`;
export const FormMessage = styled.p`
  font-size: 11px;
  padding: 0px 10px;
  color: #868e96;
  margin-top: 4px;
`;
