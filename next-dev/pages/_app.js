import '@/styles/globals.css';
import { ThemeProvider } from '../ThemeProvider.js';
import '../styles/cute-styles/index.scss';

export default function App({ Component, pageProps }) {
  const themeOptions = {};
  return (
    <ThemeProvider themeOptions={themeOptions}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
