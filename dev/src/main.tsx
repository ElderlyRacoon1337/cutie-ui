import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeProvider';

const themeOptions = {
  colors: {
    // bebrik: 'violet',
    primary: '#2394fe',
    secondary: '#aa49ad',
    neutral: 'rgb(81, 94, 111)',
  },
  lightMode: {
    backgroundSecondary: 'white',
    // primary: '#000',
    // secondary: '#000',
    // neutral: '#000',
    // error: '#000',
    // success: '#000',
  },
  darkMode: {
    backgroundSecondary: '#121212',
    // primary: 'pink',
    // bebrik: 'green',
    // primary: '#fff',
    // secondary: '#fff',
    // neutral: '#fff',
    // error: '#fff',
    // success: '#fff',
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
