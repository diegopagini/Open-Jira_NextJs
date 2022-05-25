/** @format */
import '../styles/globals.css';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { darkTheme } from '../themes';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
