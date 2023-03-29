import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeProvider';
import './cutie-styles/index.scss';
import './index.scss';
import CssBaseline from './cutie-components/CssBaseline';

const themeOptions = {
  colors: {
    yellow: 'turquoise',
    primary: '#811af0',
  },
  lightMode: {},
  darkMode: {
    yellow: 'hotpink',
    primary: '#d9b5ff',
  },
  styleOverrides: {},
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider themeOptions={themeOptions}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
