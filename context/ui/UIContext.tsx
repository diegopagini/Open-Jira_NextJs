/** @format */
import { createContext } from 'react';

interface ContextProps {
	sidemenuOpen: boolean;
	openSideMenu: () => void;
	closeSideMenu: () => void;
}
// Propiedades del componente
export const UIContext = createContext({} as ContextProps);
