import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Salena';
    src: url('/fonts/Salena-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Salena';
    src: url('/fonts/Salena-Medium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Salena';
    src: url('/fonts/Salena-SemiBold.otf') format('opentype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Salena';
    src: url('/fonts/Salena-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Salena';
    src: url('/fonts/Salena-Bold.otf') format('opentype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Salena';
    src: url('/fonts/Salena-Bold.otf') format('opentype');
    font-weight: 900;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Salena', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000000;
    color: #ffffff;
    overflow-x: hidden;
  }

  :root {
    --color-black: #000000;
    --color-gold: #D4AF37;
    --color-yellow: #F5C61A;
    --color-white: #FFFFFF;
    --color-gray: #A0A0A0;
    --color-dark-gray: #1A1A1A;
  }
`;

export default GlobalStyles;