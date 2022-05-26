/** @format */
import { createContext } from 'react';

interface ContextProps {
	sidemenuOpen: boolean;
	isAddingEntry: boolean;
	isDragging: boolean;
	openSideMenu: () => void;
	closeSideMenu: () => void;
	setIsAddingEntry: (isAdding: boolean) => void;
	startDragging: () => void;
	endDragging: () => void;
}
// Propiedades del componente
export const UIContext = createContext({} as ContextProps);
