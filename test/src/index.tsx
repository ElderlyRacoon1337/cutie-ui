import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { CssBaseline, ThemeProvider } from 'cutie-ui';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const themeOptions = {
  colors: { primary: 'turquoise' },
  darkMode: { primary: 'hotpink' },
};

root.render(
  <React.StrictMode>
    <ThemeProvider themeOptions={themeOptions}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
