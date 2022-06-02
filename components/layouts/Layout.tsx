/** @format */
import { Box } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';

import { Navbar, Sidebar } from '../ui';

interface Props {
	title?: string;
	children: JSX.Element | JSX.Element[];
}

export const Layout: NextPage<Props> = ({
	title = 'OpenJira - App',
	children,
}) => {
	return (
		// sx == style pero con acceso al tema.
		<Box
			sx={{
				flexFlow: 1,
			}}
		>
			<Head>
				<title>{title}</title>
			</Head>

			<Navbar></Navbar>
			<Sidebar></Sidebar>

			<Box
				sx={{
					padding: '10px 20px',
				}}
			>
				{children}
			</Box>
		</Box>
	);
};
