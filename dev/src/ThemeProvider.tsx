import { useState, useEffect, createContext } from 'react';

const isBrowserDefaultDark = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;
const getDefaultTheme = (): string => {
  const localStorageTheme = localStorage.getItem('default-theme');
  const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
  return localStorageTheme || browserDefault;
};

export const ThemeContext = createContext({
  theme: '',
  changeTheme: (theme: 'light' | 'dark' | 'system') => {},
  palette: {},
});

const defaultPalette = {
  primary: '#fe4739',
  secondary: '#2cd252',
  secondaryDark: '#2cd252',
  secondaryLight: '#2cd252',
};

interface ThemeProvider {
  children: React.ReactNode;
  palette?: object;
}

export const ThemeProvider: React.FC<ThemeProvider> = ({
  palette = defaultPalette,
  children,
}) => {
  const localStorageTheme = window.localStorage.getItem('theme');
  const [theme, setTheme] = useState(
    localStorageTheme ? localStorageTheme : getDefaultTheme()
  );

  function changeTheme(theme: 'light' | 'dark' | 'system') {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case 'light':
        document.documentElement.dataset.theme = 'light';
        window.localStorage.setItem('theme', 'light');
        break;
      case 'dark':
        document.documentElement.dataset.theme = 'dark';
        window.localStorage.setItem('theme', 'dark');
        break;
      case 'system':
      default:
        document.documentElement.dataset.theme = getDefaultTheme();
        window.localStorage.removeItem('theme');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme: theme, changeTheme: changeTheme, palette: palette }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
