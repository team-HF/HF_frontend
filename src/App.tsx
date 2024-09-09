import { theme } from "./app/theme";
import styled from "styled-components";

function App() {
  return (
      <Box>HF</Box>
  );
}

const Box = styled.div`
  ${theme.fontSize.title_1}
`

export default App;
