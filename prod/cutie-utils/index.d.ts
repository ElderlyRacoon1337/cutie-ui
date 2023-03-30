import React from 'react';

interface StyleOverridesType {
  alert?: string;
  button?: string;
  avatar?: string;
  checkbox?: string;
  gradientText?: string;
  iconButton?: string;
  input?: string;
  linearProgress?: string;
  link?: string;
  list?: string;
  listItem?: string;
  listItemButton?: string;
  menu?: string;
  menuItem?: string;
  popup?: string;
  radio?: string;
  select?: string;
  skeleton?: string;
  loader1?: string;
  loader2?: string;
  loader3?: string;
  switch?: string;
  tabs?: string;
  tooltip?: string;
}

interface ThemeContextType {
  styleOverrides: StyleOverridesType;
  theme: string;
  changeTheme: (theme: 'light' | 'dark' | 'system') => void;
  variables: object;
}

interface ThemeProvider {
  children: React.ReactNode;
  themeOptions?: any;
}

export const ThemeProvider: React.FC<ThemeProvider>;
export const ThemeContext: React.Context<ThemeContextType>;
