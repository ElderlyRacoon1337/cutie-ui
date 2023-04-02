import CutieStyles from '@/cutie-components/CutieStyles';
import '@/styles/index.scss';
import { CssBaseline, ThemeProvider } from 'cutie-ui';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
