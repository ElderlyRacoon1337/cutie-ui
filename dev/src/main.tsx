import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeProvider';
import './cutie-styles/index.scss';
import './index.scss';
import CssBaseline from './cutie-components/CssBaseline';

const themeOptions = {
  colors: {},
  lightMode: {},
  darkMode: {
    // logo: '#fff',
    // primary: 'green',
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
    <CssBaseline />
    <App />
  </ThemeProvider>
);
