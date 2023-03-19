import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeProvider';

const themeOptions = {
  colors: {
    // textPrimary: 'purple',
    primary: '#2394fe',
    secondary: '#aa49ad',
    neutral: 'rgb(81, 94, 111)',
    // link: 'rgb(24, 118, 209)',
    error: '#ff9ca5',
    success: '#2cd252',
    // neutral: '#000',
  },
  lightMode: {
    backgroundSecondary: 'white',
  },
  darkMode: {
    // backgroundSecondary: 'grey',
    // link: 'yellow',
    // primary: 'green',
    // secondary: '#bffffc',
    // success: '#1c401c',
    error: 'red',
    // disabled: 'pink',
    backgroundSecondary: 'black',
    // divider: 'pink',
    // textPrimary: 'grey',
  },
  font: {
    fontSize: {
      small: '20px',
      large: '40px',
      medium: '30px',
    },
    fontFamily: 'sans serif',
  },
  breakPoints: {
    sm: '600px',
    md: '900px',
    lg: '1200px',
  },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider themeOptions={themeOptions}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
