import { useState, useEffect, createContext } from 'react';
import tinycolor2 from 'tinycolor2';

export const ThemeContext = createContext({
  theme: '',
  changeTheme: (theme: 'light' | 'dark' | 'system') => {},
  variables: {},
});

const variables: any = {};

interface ThemeProvider {
  children: React.ReactNode;
  themeOptions?: any;
}

const light = 5;
const tooLight = 10;
const dark = 5;
const tooDark = 10;
const glass = 0.08;
const darkGlass = 0.12;
const dm_glass = 0.15;
const dm_darkGlass = 0.2;

const initialVariables: any = {
  lightMode: {
    fontFamily: '"system-ui", sans-serif',
    fontSizeSmall: '0,8125rem',
    fontSizeMedium: '0.875rem',
    fontSizeLarge: '0.9375rem',
    white: 'white',
    black: 'black',
    primary: '#eb0066',
    secondary: '#475979',
    neutral: '#46505c',
    error: '#fe4739',
    success: '#2cd252',
    disabled: 'rgb(201, 201, 201)',
    link: 'rgb(24, 118, 209)',
    background: '#ffffff',
    backgroundSecondary: 'rgba(246, 246, 246, 0.85)',
    textPrimary: '#000000',
    textSecondary: '#6a6a6a',
    textOpposite: '#fff',
    divider: 'rgb(218, 218, 218)',
    baseBoxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.15)',
    glass: tinycolor2('#000').setAlpha(0.04).toString(),
    darkGlass: tinycolor2('#000').setAlpha(0.06).toString(),
    skeletonLight: 'rgb(236, 235, 235)',
    skeletonDark: 'rgb(243, 243, 243)',
  },
  darkMode: {
    fontFamily: '"system-ui", sans-serif',
    fontSizeSmall: '0,8125rem',
    fontSizeMedium: '0.875rem',
    fontSizeLarge: '0.9375rem',
    white: 'white',
    black: 'black',
    primary: 'pink',
    secondary: '#475979',
    neutral: '#46505c',
    error: '#d02a35',
    success: 'rgb(30, 158, 8)',
    disabled: 'rgb(82, 82, 82)',
    link: 'rgb(31, 136, 241)',
    background: '#000000',
    backgroundSecondary: '#141414',
    textPrimary: '#fff',
    textSecondary: '#bcbcbc',
    textOpposite: '#000',
    divider: 'rgb(57, 57, 57)',
    baseBoxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
    glass: tinycolor2('#fff').setAlpha(0.07).toString(),
    darkGlass: tinycolor2('#fff').setAlpha(0.1).toString(),
    skeletonLight: 'rgb(31, 31, 31)',
    skeletonDark: 'rgb(25, 25, 25)',
  },
};

export const ThemeProvider: React.FC<ThemeProvider> = ({
  themeOptions = {},
  children,
}) => {
  const colors = themeOptions.colors || {};
  const darkMode = themeOptions.darkMode || {};
  const lightMode = themeOptions.lightMode || {};
  const font = themeOptions.font || {};
  const [theme, setTheme] = useState('light');
  const [isLightMode, setIsLightMode] = useState(true);
  function changeTheme(theme: any) {
    setTheme(theme);
  }

  if (font) {
    if (font.size) {
      for (let key in font.size) {
        variables[`fontSize${key[0].toLocaleUpperCase()}${key.slice(1)}`] =
          font.size[key];
      }
    }
    if (font.family) {
      for (let key in font.family) {
        variables[key] = font.family[key];
      }
    }
  }

  if (theme == 'light') {
    for (let key in initialVariables.lightMode) {
      variables[key] = initialVariables.lightMode[key];
    }
    if (colors) {
      for (let key in colors) {
        variables[key] = colors[key];
      }
    }
    for (let key in lightMode) {
      variables[key] = lightMode[key];
    }
  }
  if (theme == 'dark') {
    for (let key in initialVariables.darkMode) {
      variables[key] = initialVariables.darkMode[key];
    }
    if (colors) {
      for (let key in colors) {
        variables[key] = colors[key];
      }
    }
    for (let key in darkMode) {
      variables[key] = darkMode[key];
    }
  }

  useEffect(() => {
    const isBrowserDefaultDark = () =>
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const getDefaultTheme = () => {
      const localStorageTheme = localStorage.getItem('theme');
      const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
      return localStorageTheme || browserDefault;
    };
    changeTheme(getDefaultTheme());
    switch (theme) {
      case 'light':
        document.documentElement.dataset.theme = 'light';
        window.localStorage.setItem('theme', 'light');
        setIsLightMode(true);
        break;
      case 'dark':
        document.documentElement.dataset.theme = 'dark';
        window.localStorage.setItem('theme', 'dark');
        setIsLightMode(false);
        break;
      case 'system':
        window.localStorage.removeItem('theme');
        document.documentElement.dataset.theme = getDefaultTheme();
        setIsLightMode(getDefaultTheme() == 'light');
      default:
        window.localStorage.removeItem('theme');
        break;
    }
  }, []);

  useEffect(() => {
    const isBrowserDefaultDark = () =>
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const getDefaultTheme = () => {
      const localStorageTheme = localStorage.getItem('theme');
      const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
      return localStorageTheme || browserDefault;
    };

    if (theme) {
      switch (theme) {
        case 'light':
          document.documentElement.dataset.theme = 'light';
          window.localStorage.setItem('theme', 'light');
          setIsLightMode(true);
          break;
        case 'dark':
          document.documentElement.dataset.theme = 'dark';
          window.localStorage.setItem('theme', 'dark');
          setIsLightMode(false);
          break;
        case 'system':
          window.localStorage.removeItem('theme');
          document.documentElement.dataset.theme = getDefaultTheme();
          setIsLightMode(getDefaultTheme() == 'light');
        default:
          window.localStorage.removeItem('theme');
          break;
      }
    }

    if (document.documentElement.dataset.theme == 'light') {
      for (let key in initialVariables.lightMode) {
        variables[key] = initialVariables.lightMode[key];
      }
      if (colors) {
        for (let key in colors) {
          variables[key] = colors[key];
        }
      }
      for (let key in lightMode) {
        variables[key] = lightMode[key];
      }
    }
    if (document.documentElement.dataset.theme == 'dark') {
      for (let key in initialVariables.darkMode) {
        variables[key] = initialVariables.darkMode[key];
      }
      if (colors) {
        for (let key in colors) {
          variables[key] = colors[key];
        }
      }
      for (let key in darkMode) {
        variables[key] = darkMode[key];
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: isLightMode ? 'light' : 'dark',
        changeTheme: changeTheme,
        variables: variables,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
