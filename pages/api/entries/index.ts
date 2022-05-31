/** @format */
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

import type { NextApiRequest, NextApiResponse } from 'next';
type Data =
	| {
			message: string;
	  }
	| IEntry[];

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	switch (req.method) {
		case 'GET':
			return getEntries(res);

		case 'POST':
			return postEntry(req, res);

		default:
			return res.status(400).json({ message: 'No existe el endpoint' });
	}
}

const getEntries = async (res: NextApiResponse<Data>) => {
	await db.connect(); // Nos conectamos a nuestra BBDD.
	const entries = await Entry.find().sort({ createdAt: 'ascending' });
	await db.disconnect(); // Nos desconectamos de nuestra BBDD.

	res.status(200).json(entries);
};

const postEntry = async (req: NextApiRequest, res: NextApiResponse) => {
	const { description = '' } = req.body;
	const newEntry = new Entry({
		description,
		createdAt: Date.now(),
	});

	try {
		await db.connect();
		await newEntry.save();
		await db.disconnect();
		return res.status(201).json(newEntry);
	} catch (error) {
		await db.disconnect();
		console.log(error);
		return res
			.status(500)
			.json({ message: 'algo salió mal, revisar consola del servidor' });
	}
};
