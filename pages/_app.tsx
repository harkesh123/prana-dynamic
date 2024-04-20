import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';

  
  const theme = createTheme({
    typography: {},
  });

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return ( <AppCacheProvider {...props}><ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider></AppCacheProvider>);
}
