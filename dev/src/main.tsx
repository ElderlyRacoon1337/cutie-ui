import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeProvider';
import CutieStyles from './cutie-components/CutieStyles';
import './index.scss';

const themeOptions = {
  colors: {
    primary: '#41f098',
    logo: '#DA417E',
  },
  lightMode: {
    primary: '#DA417E',
    background: '#FFFFFF',
  },
  darkMode: {
    logo: '#fff',
    primary: '#ff8fbc',
    // secondary: 'red',
  },
  // font: {
  //   size: {
  //     small: '20px',
  //     large: '40px',
  //     medium: '2rem',
  //   },
  //   family: {
  //     fontFamily: 'verdana',
  //     customFamily: 'bebra',
  //   },
  // },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider themeOptions={themeOptions}>
    <React.StrictMode>
      <CutieStyles />
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
