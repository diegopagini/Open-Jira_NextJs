/** @format */
import '../styles/globals.css';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { UIProvider } from '../context/ui';
import { darkTheme } from '../themes';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UIProvider>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</UIProvider>
	);
}

export default MyApp;
