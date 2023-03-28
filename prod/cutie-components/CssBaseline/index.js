import { useContext } from 'react';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import { createGlobalStyle } from 'styled-components';
import { jsx as _jsx } from 'react/jsx-runtime';
const Globals = createGlobalStyle`
  body {
    min-height: 100vh;
    color: ${(props) => props.variables.textPrimary};
    font-size: ${(props) => props.variables.fontSizeMedium};
    background-color: ${(props) => props.background};
    font-family: ${(props) => props.variables.baseFontFamily};
  }
  :root {
    ${(props) => props.stringOfVariables}
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
export const CssBaseline = () => {
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
  const stringOfVariables = Object.entries(variables)
    .map((el) => `--${el[0]}: ${el[1]}`)
    .join(';');
  return /*#__PURE__*/ _jsx(Globals, {
    variables: variables,
    background: variables.background,
    stringOfVariables: stringOfVariables,
  });
};
