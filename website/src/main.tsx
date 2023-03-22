import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'cutie-ui/cute-styles/index.scss';
import './index.css';
import { ThemeProvider } from 'cutie-ui';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
