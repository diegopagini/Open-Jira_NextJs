/** @format */
import { List, Paper } from '@mui/material';
import { FC, useContext } from 'react';

import { EntriesContext } from '../../context/entries';
import { Entry, EntryStatus } from '../../interfaces';
import { EntryCard } from './';

interface Props {
	status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
	const { entries } = useContext(EntriesContext);

	const entriesByStatus = entries.filter(
		(entry: Entry) => entry.status === status
	);

	return (
		<div>
			<Paper
				sx={{
					height: 'calc(100vh - 250px)',
					backgroundColor: 'transparent',
					padding: 1,
					overflowY: 'scroll',
				}}
			>
				<List
					sx={{
						opacity: 1,
					}}
				>
					{entriesByStatus.map((entry: Entry) => (
						<EntryCard key={entry._id} entry={entry} />
					))}
				</List>
			</Paper>
		</div>
	);
};
