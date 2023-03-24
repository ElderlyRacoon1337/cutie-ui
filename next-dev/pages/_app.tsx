import CutieStyles from '@/cutie-components/CutieStyles';
import '@/styles/index.scss';
import '@/styles/CutieStyles.scss';
import { ThemeProvider } from '@/ThemeProvider';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      {/* <CutieStyles /> */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
