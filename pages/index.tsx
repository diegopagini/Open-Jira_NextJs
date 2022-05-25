/** @format */
import { Typography } from '@mui/material';

import { Layout } from '../components/layouts';

import type { NextPage } from 'next';
const HomePage: NextPage = () => {
	return (
		<Layout title='OpenJira - App'>
			<Typography variant='h1' color='primary'>
				Hola mundo
			</Typography>
		</Layout>
	);
};

export default HomePage;
