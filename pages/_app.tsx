import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = {
    colors: {
      primary: '#ff335f',
      primary_light: '#fff0fc',
      gray: '#2e2e2e',
      gray_medium: '#6c6c6c',
      gray_light: '#dedede',
      white: '#fff',

      background: {
        primary: '#fff',
        secondary: '#f6f7f9',
        tertiary: '#0D1117',
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
