// @ts-nocheck
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { createGlobalStyle } from 'styled-components';

const CssBaseline = () => {
  const theme = useContext(ThemeContext);
  const variables = theme.variables;

  const Globals = createGlobalStyle`
  body {
    min-height: 100vh;
    width: 100%;
    color: ${variables.textPrimary};
    font-size: ${variables.fontSizeMedium};
    background-color: ${variables.background};
    font-family: ${variables.fontFamily};
  }
  .container {
    max-width: 1240px;
    padding: 0 20px;
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    .container {
      max-width: 940px;
      margin: 0 auto;
    }
  }

  @media (max-width: 900px) {
    .container {
      max-width: 640px;
      margin: 0 auto;
    }
  }

  @media (max-width: 600px) {
    .container {
      max-width: 540px;
      margin: 0 auto;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
`;

  return <Globals />;
};
export default CssBaseline;
