import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
:root {
--color-font-headlines: rgb(240 240 240);
--color-font-regular: rgb(113,153,153);
--color-bg-main: rgb(0 0 0 / 90%);
--color-bg-header: rgb(29 29 29);
--color-bg-footer: rgb(153,153,153);
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

* {
  box-sizing: border-box;
  color: var(--color-font-regular);
}

h1,h2,h3 {
  color: var(--color-font-headlines)
}

a {
  color: inherit;
  text-decoration: none;
}



`;

export default globalStyles;
