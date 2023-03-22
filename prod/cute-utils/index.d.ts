import React, { createContext } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark' | 'system';
  changeTheme: (theme: 'light' | 'dark' | 'system') => {};
  colors: object;
}

interface ThemeProvider {
  children: React.ReactNode;
  themeOptions?: any;
}

export const ThemeProvider: React.FC<ThemeProvider>;
export const ThemeContext: ThemeContextType;
