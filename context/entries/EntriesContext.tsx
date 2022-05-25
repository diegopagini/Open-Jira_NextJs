/** @format */
import { createContext } from 'react';

interface ContextProps {
	entries: []; // TODO: falta el tipo de dato del arreglo.
}

export const EntriesContext = createContext({} as ContextProps);
