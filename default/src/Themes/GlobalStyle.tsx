import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: 'JetBrains Mono';
    src: url('./caminho/para/sua/fonte/JetBrainsMono-Regular.woff2') format('woff2');
    /* Adicione outros formatos de fonte conforme necessário */
    font-weight: 400;
    font-style: normal;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: normal;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12pt;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.link};
    transition: .2s ease-out;

    &:hover { color: ${props => props.theme.colors.linkHover}; }
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
