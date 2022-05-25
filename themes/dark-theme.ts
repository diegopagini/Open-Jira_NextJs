/** @format */
import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
	},

	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: '#4a148c',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					'*::-webkit-scrollbar': {
						width: '0.4em',
					},
					'*::-webkit-scrollbar-track': {
						WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
					},
					'*::-webkit-scrollbar-thumb': {
						backgroundColor: 'rgba(0,0,0,.1)',
						outline: '1px solid slategrey',
					},
				},
			},
		},
	},
});
