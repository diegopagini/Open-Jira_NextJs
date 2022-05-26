/** @format */
import { createContext } from 'react';

interface ContextProps {
	sidemenuOpen: boolean;
	isAddingEntry: boolean;
	openSideMenu: () => void;
	closeSideMenu: () => void;
	setIsAddingEntry: (isAdding: boolean) => void;
}
// Propiedades del componente
export const UIContext = createContext({} as ContextProps);
