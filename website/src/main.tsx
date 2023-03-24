import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'cutie-ui/cutie-styles/index.scss';
import { ThemeProvider } from 'cutie-ui';
import './index.scss';

const themeOptions = {
  lightMode: {
    codeBg: '#141414',
    primary: '#ed00ed',
  },
  darkMode: {
    codeBg: '#141414',
    primary: '#ffb5ff',
  },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider themeOptions={themeOptions}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
