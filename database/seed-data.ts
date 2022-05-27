/** @format */

interface SeedData {
	entries: SeedEntry[];
}

interface SeedEntry {
	description: string;
	status: EntryStatus;
	createdAt: number;
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished';

export const seedData: SeedData = {
	entries: [
		{
			description: 'Pendiente',
			status: 'pending',
			createdAt: Date.now(),
		},
	],
};
