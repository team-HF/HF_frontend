import styled from "styled-components";

export const Container = styled.div`
  width: 335px;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 100px;
  overflow: hidden;
`;
export const ProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: #6541f2;
  transition: width 0.5s ease-in-out;
  border-radius: 100px;
`;
