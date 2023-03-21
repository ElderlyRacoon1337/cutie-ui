import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeProvider';

const themeOptions = {
  colors: {
    primary: '#eb0066',
    secondary: '#475979',
  },
  lightMode: {},
  darkMode: {
    // background: '#0a0d12',
    success: '#25b847',
    backgroundSecondary: '#141414',
  },
  font: {
    size: {
      // small: '20px',
      // large: '40px',
      // medium: '2rem',
    },
    // family: 'verdana',
  },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider themeOptions={themeOptions}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
