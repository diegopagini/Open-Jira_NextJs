/** @format */
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';

export const NewEntry = () => {
	const [isAdding, setIsAdding] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [touched, setTouched] = useState(false);

	const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const onSave = () => {
		if (inputValue.length === 0) return;
		console.log({ inputValue });
	};

	return (
		<Box
			sx={{
				marginBottom: 2,
				paddingX: 2,
			}}
		>
			{isAdding ? (
				<>
					<TextField
						fullWidth
						sx={{ marginTop: 2, marginBottom: 1 }}
						placeholder='Nueva entrada'
						autoFocus
						multiline
						label='Nueva entrada'
						helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
						error={inputValue.length <= 0 && touched}
						value={inputValue}
						onChange={onTextFieldChanged}
						onBlur={() => setTouched(true)}
					/>

					<Box display='flex' justifyContent='space-between'>
						<Button variant='text' onClick={() => setIsAdding(false)}>
							Cancelar
						</Button>
						<Button
							variant='outlined'
							color='secondary'
							endIcon={<SaveOutlinedIcon />}
							onClick={onSave}
						>
							Guardar
						</Button>
					</Box>
				</>
			) : (
				<Button
					startIcon={<AddCircleOutlineOutlinedIcon />}
					fullWidth
					variant='outlined'
					onClick={() => setIsAdding(true)}
				>
					Agregar Tarea
				</Button>
			)}
		</Box>
	);
};
