import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;

    :root {
      font-family: 'Roboto', sans-serif;
      font-size: 62.5%; /**Conversion of browser font size to 10px */
    }
  }

  body {
    font-size: 1.6rem;
    color: ${props => props.theme.colors.text};
  }
`