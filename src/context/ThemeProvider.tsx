import { useEffect, useState, type ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  function toggleIsDark() {
    setIsDark((prev) => !prev);
  }

  return <ThemeContext.Provider value={{ isDark, toggleIsDark }}>{children}</ThemeContext.Provider>;
};
export default ThemeProvider;
