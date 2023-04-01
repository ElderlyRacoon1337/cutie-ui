import { Button, Icon } from 'cutie-ui';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const Themming = () => {
  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Themming
      </h1>
      <Section
        text={`In the "themeOptions" you can set colors and other variables.
        These variables can be used in the "color" property and via var(--yourVariable) in any css file`}
        visible
        title="Theme options"
        code={`import { CssBaseline, ThemeProvider } from 'cutie-ui';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const themeOptions = {
  colors: {
    secondary: 'purple',
    someVariable: '#eee',
  },
  lightMode: {
    primary: 'red',
  },
  darkMode: {
    primary: 'green',
  },
  font: {
    size: {
      small: '0.5rem',
      medium: '1rem',
      large: '1.5rem',
    },
    family: {
      baseFontFamily: 'Courier',
    },
  },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider themeOptions={themeOptions}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
`}
      />

      <Section
        visible
        text='The changeTheme function takes "light", "dark" and "system" arguments'
        title="Switch theme"
        code={`import { ThemeContext } from 'cutie-ui';
        
const [theme, setTheme] = useState('light');
const { changeTheme } = useContext(ThemeContext);
const { checkedSwitch, setCheckedSwitch, handleSwitch } = useSwitch();
useEffect(() => {
  const theme = document.documentElement.dataset.theme;
  if (theme) {
    setCheckedSwitch(theme == 'dark');
    setTheme(theme);
  }
}, [document.documentElement.dataset.theme]);

<Switch
  checked={checkedSwitch}
  onChange={(e: any) => {
    handleSwitch(e);
    changeTheme(theme == 'dark' ? 'light' : 'dark');
  }}
/>`}
      />
    </div>
  );
};
