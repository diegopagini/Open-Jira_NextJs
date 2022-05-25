/** @format */
import '../styles/globals.css';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { EntriesProvider } from '../context/entries';
import { UIProvider } from '../context/ui';
import { darkTheme } from '../themes';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<EntriesProvider>
			<UIProvider>
				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</UIProvider>
		</EntriesProvider>
	);
}

export default MyApp;
