// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  body {
    min-height: 100vh;
    width: 100%;
    color: ${(props) => props.variables.textPrimary};
    font-size: ${(props) => props.variables.fontSizeMedium};
    background-color: ${(props) => props.background};
    font-family: ${(props) => props.variables.fontFamily};
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

const CssBaseline = () => {
  const theme = useContext(ThemeContext);
  const [variables, setVariables] = useState({});
  const [background, setBackground] = useState('');
  const [mode, setMode] = useState(theme.theme);

  useEffect(() => {
    setMode(theme.theme);
    setVariables(theme.variables);
    console.log(theme.theme, theme.variables.background);
    setBackground(theme.variables.background);
  }, [theme.variables.background, mode]);

  return <Globals variables={variables} background={background} />;
};
export default CssBaseline;
