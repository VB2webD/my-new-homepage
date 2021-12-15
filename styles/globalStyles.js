import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
:root {
    --color-bg-main = rgb(155 155 155 / 30%)
}

body {
    box-sizing: border-box;
    margin:0;
    padding:0; 
}
`;

export default globalStyles;
