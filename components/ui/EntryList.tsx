/** @format */
import { List, Paper } from '@mui/material';
import { DragEvent, FC, useContext, useMemo } from 'react';

import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';
import { Entry, EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import styles from './EntryList.module.css';

interface Props {
	status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
	const { entries } = useContext(EntriesContext);
	const { isDragging } = useContext(UIContext);

	const entriesByStatus = useMemo(
		() => entries.filter((entry: Entry) => entry.status === status),
		[entries, status]
	);

	const onDropEntry = (event: DragEvent) => {
		const id = event.dataTransfer.getData('text');
	};

	const allowDrop = (event: DragEvent) => {
		event.preventDefault();
	};

	return (
		<div
			onDrop={onDropEntry}
			onDragOver={allowDrop}
			className={isDragging ? styles.dragging : ''}
		>
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
						opacity: isDragging ? 0.5 : 1,
						transition: 'all .3s',
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
