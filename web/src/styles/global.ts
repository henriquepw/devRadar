import { createGlobalStyle } from 'styled-components';

import { primaryColor } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::selection {
      background-color: ${primaryColor.active};
      color: white;
    }

  }

  *:focus,
  a:focus,
  button:focus {
    outline: 2px solid ${primaryColor.active};
    outline-offset: 6px;
  }

  body,
  input,
  button {
    font-family: sans-serif;
  }

  html, body {
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
