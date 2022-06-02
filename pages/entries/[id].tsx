/** @format */
import DeleteOutlineButton from '@mui/icons-material/DeleteOutline';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import {
  Button,
  capitalize,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import mongoose from 'mongoose';
import { GetServerSideProps } from 'next';
import { ChangeEvent, FC, useMemo, useState } from 'react';

import { Layout } from '../../components/layouts';
import { EntryStatus } from '../../interfaces';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface Props {
	id: string;
}

export const EntryPage: FC<Props> = (props) => {
	const [inputValue, setInputValue] = useState('');
	const [status, setStatus] = useState<EntryStatus>('pending');
	const [touched, setTouched] = useState(false);

	const isNotValid = useMemo(
		() => inputValue.length <= 0 && touched,
		[inputValue, touched]
	);

	const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
		setStatus(event.target.value as EntryStatus);
	};

	const onSave = () => {};

	return (
		<Layout title='...'>
			<Grid container justifyContent='center' sx={{ marginTop: 2 }}>
				<Grid item xs={12} sm={8} md={6}>
					<Card>
						<CardHeader
							title={`Entrada: ${inputValue}`}
							subheader={`Creada hace: ... minutos`}
						/>

						<CardContent>
							<TextField
								sx={{ marginTop: 2, marginBottom: 1 }}
								fullWidth
								placeholder='Actualizar entrada'
								autoFocus
								multiline
								label='Actualizar entrada'
								onBlur={() => setTouched(true)}
								value={inputValue}
								onChange={onInputValueChanged}
								helperText={isNotValid && 'Ingrese un valor'}
								error={isNotValid}
							/>

							<FormControl>
								<FormLabel sx={{ margin: 1 }}>Estado:</FormLabel>
								<RadioGroup row value={status} onChange={onStatusChanged}>
									{validStatus.map((option) => (
										<FormControlLabel
											key={option}
											value={option}
											control={<Radio />}
											label={capitalize(option)}
										/>
									))}
								</RadioGroup>
							</FormControl>
						</CardContent>

						<CardActions>
							<Button
								startIcon={<SaveOutlinedIcon />}
								variant='contained'
								fullWidth
								onClick={onSave}
								disabled={inputValue.length <= 0}
							>
								Save
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>

			<IconButton
				sx={{
					position: 'fixed',
					bottom: 30,
					right: 30,
					backgroundColor: 'error.dark',
				}}
			>
				<DeleteOutlineButton />
			</IconButton>
		</Layout>
	);
};

// Las propiedades estáticas las definimos al final.
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { id } = params as { id: string };

	if (!mongoose.isValidObjectId(id)) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		// Estas props son las que se van a pasar al componente.
		props: {
			id,
		},
	};
};

export default EntryPage;
