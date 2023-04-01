import { CssBaseline, ThemeProvider } from 'cutie-ui';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

const themeOptions = {
  lightMode: {
    codeBg: '#141414',
    // primary: '#ed00ed',
  },
  darkMode: {
    codeBg: '#141414',
    // primary: '#ffb5ff',
  },
  // font: {
  //   size: {
  //     small: '0.5rem',
  //     medium: '1rem',
  //     large: '1.5rem',
  //   },
  //   family: {
  //     baseFontFamily: 'Courier',
  //   },
  // },
  styleOverrides: {
    button: ``,
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
