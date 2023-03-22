import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeProvider';

const themeOptions = {
  colors: {
    primary: '#ECFF9B',
    logo: '#eb0066',
    // background: '#151515',
  },
  lightMode: {
    primary: '#c90051',
  },
  darkMode: {
    logo: '#fff',
  },
  // font: {
  //   size: {
  //     small: '20px',
  //     large: '40px',
  //     medium: '2rem',
  //   },
  //   family: 'verdana',
  // },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider themeOptions={themeOptions}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
