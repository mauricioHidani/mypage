import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 12pt;
  }

  body {
    background: ${ props => props.theme.bkgColor };
  }

  a { 
    text-decoration: none; 
    &:hover { text-decoration: underline; } 
  }

`;
