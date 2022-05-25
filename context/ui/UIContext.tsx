/** @format */
import { createContext } from 'react';

interface ContextProps {
	sidemenuOpen: boolean;
}
// Propiedades del componente
export const UIContext = createContext({} as ContextProps);
