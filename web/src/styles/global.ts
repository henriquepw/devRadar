import { createGlobalStyle } from 'styled-components';

import { primaryColor, secundaryColor } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::selection {
      background-color: ${primaryColor.active};
      color: ${secundaryColor.text};
    }
  }

  html, body {
    font: 16px sans-serif;

    background-color: ${primaryColor.bg};
    color: ${primaryColor.text};

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-behavior: smooth;
  }

  a,
  button {
    color: ${primaryColor.text};
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`;
