/** @format */
import { FC, useEffect, useReducer } from 'react';

import { entriesApi } from '../../apis';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
	entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
	entries: [],
};

interface Props {
	children: JSX.Element;
}
export const EntriesProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

	const addNewEntry = async (description: string) => {
		const { data } = await entriesApi.post<Entry>('/entries', { description });
		dispatch({ type: '[Entry] - Add-Entry', payload: data });
	};

	const updateEntry = (entry: Entry) => {
		dispatch({ type: '[Entry] - Entry-Updated', payload: entry });
	};

	const refreshEntries = async () => {
		const { data } = await entriesApi.get<Entry[]>('/entries');
		dispatch({ type: '[Entry] - Initial-Load', payload: data });
	};

	useEffect(() => {
		refreshEntries();
	}, []);

	return (
		<EntriesContext.Provider
			value={{
				...state,
				addNewEntry,
				updateEntry,
			}}
		>
			{children}
		</EntriesContext.Provider>
	);
};
