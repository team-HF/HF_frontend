import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Pretendard',sans-serif;
    }
    @font-face {
        font-family: 'Pretendard';
        src: url('../node_modules/pretendard/dist/web/static/woff2/Pretendard-Regular.woff2') format('woff2'),
       url('../node_modules/pretendard/dist/web/static/woff/Pretendard-Regular.woff') format('woff');
    }
    
`;
export default GlobalStyles;
