import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
`;
export const Title = styled.span`
  padding: 4px;
  border-radius: 2px;
  background-color: #646c78;
  color: white;
  font-size: 10px;
  font-weight: 600;
`;
export const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 4px 0 4px 6.9px;
  border-color: transparent transparent transparent #646c78;
  transform: rotate(0deg);
`;
