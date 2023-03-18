import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <ThemeProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </ThemeProvider>
);
