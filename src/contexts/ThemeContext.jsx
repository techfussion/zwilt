import { createContext, useState, useEffect } from 'react';

const getSystemTheme = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const DEFAULT_THEME = localStorage.getItem('theme') || getSystemTheme();

const initialState = {
  theme: DEFAULT_THEME,
  toggleTheme: () => {},
}

export const ThemeContext = createContext(initialState);

const ThemeContextProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(DEFAULT_THEME);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const changeHandler = () => {
      setThemeName(getSystemTheme());
    };
    mediaQuery.addEventListener('change', changeHandler);
    return () => mediaQuery.removeEventListener('change', changeHandler);
  }, [themeName]);

  useEffect(() => {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName === 'system' ? getSystemTheme() + '-theme' : themeName + '-theme';
  }, [themeName]);

  const value = {
    theme: themeName, 
    toggleTheme: (selectedTheme) => {
      setThemeName(selectedTheme);
    },
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider;