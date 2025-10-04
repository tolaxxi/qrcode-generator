import { createContext } from 'react';

export interface ThemeContextType {
  isDark: boolean;
  toggleIsDark: () => void;
}
export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleIsDark: () => {},
});
