/** @format */
import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
	entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id: uuidv4(),
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
			status: 'pending',
			createdAt: Date.now(),
		},
		{
			_id: uuidv4(),
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
			status: 'pending',
			createdAt: Date.now(),
		},
		{
			_id: uuidv4(),
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
			status: 'in-progress',
			createdAt: Date.now() - 20000,
		},
		{
			_id: uuidv4(),
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
			status: 'finished',
			createdAt: Date.now() - 5000000,
		},
	],
};

interface Props {
	children: JSX.Element;
}
export const EntriesProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

	return (
		<EntriesContext.Provider
			value={{
				...state,
			}}
		>
			{children}
		</EntriesContext.Provider>
	);
};
