import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeProvider';

const themeOptions = {
  colors: {
    bebrik: 'violet',
    primary: '#7c00db',
    secondary: '#00dba1',
    neutral: 'rgb(81, 94, 111)',
  },
  lightMode: {
    backgroundSecondary: 'white',
    // primary: '#000',
    // neutral: '#000',
    // error: '#000',
    // success: '#000',
  },
  darkMode: {
    bebrik: 'orange',
    backgroundSecondary: '#121212',
    primary: '#4aff89',
    secondary: '#ff80f2',
    neutral: '#6f79b0',
    error: '#e000b7',
    link: 'yellow',
    success: '#c2ffd4',
  },
  font: {
    size: {
      // small: '20px',
      // large: '40px',
      // medium: '1rem',
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
