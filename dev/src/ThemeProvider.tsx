import { useState, useEffect, createContext } from 'react';
import tinycolor2 from 'tinycolor2';

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
  colors: {},
});

interface ThemeProvider {
  children: React.ReactNode;
  themeOptions?: any;
}

export const ThemeProvider: React.FC<ThemeProvider> = ({
  themeOptions = {},
  children,
}) => {
  const colors = themeOptions.colors || {};
  const darkMode = themeOptions.darkMode || {};
  const lightMode = themeOptions.lightMode || {};
  const font = themeOptions.colors || {};
  const localStorageTheme = window.localStorage.getItem('theme');
  const [theme, setTheme] = useState(
    localStorageTheme ? localStorageTheme : getDefaultTheme()
  );

  function changeTheme(theme: 'light' | 'dark' | 'system') {
    setTheme(theme);
  }

  if (colors.primary) {
    colors.primaryLight = tinycolor2(colors.primary).lighten(10).toString();
    colors.primaryTooLight = tinycolor2(colors.primary).lighten(20).toString();
    colors.primaryDark = tinycolor2(colors.primary).darken(7).toString();
    colors.primaryTooDark = tinycolor2(colors.primary).darken(12).toString();
    colors.primaryText = tinycolor2(colors.primary).isLight()
      ? 'var(--textPrimary)'
      : 'var(--textOpposite)';
    colors.primaryTextOpposite = tinycolor2(colors.primary).isLight()
      ? 'var(--textOpposite)'
      : 'var(--textPrimary)';
    colors.glassPrimary = tinycolor2(colors.primary).setAlpha(0.08).toString();
    colors.darkGlassPrimary = tinycolor2(colors.primary)
      .setAlpha(0.12)
      .toString();
    // ===
    colors.dm_primaryLight = tinycolor2(colors.primary).lighten(10).toString();
    colors.dm_primaryTooLight = tinycolor2(colors.primary)
      .lighten(20)
      .toString();
    colors.dm_primaryDark = tinycolor2(colors.primary).darken(7).toString();
    colors.dm_primaryTooDark = tinycolor2(colors.primary).darken(12).toString();
    colors.dm_primaryText = tinycolor2(colors.primary).isLight()
      ? 'var(--dm_textOpposite)'
      : 'var(--dm_textPrimary)';
    colors.dm_primaryTextOpposite = tinycolor2(colors.primary).isLight()
      ? 'var(--dm_textPrimary)'
      : 'var(--dm_textOpposite)';
    colors.dm_glassPrimary = tinycolor2(colors.primary)
      .setAlpha(0.08)
      .toString();
    colors.dm_darkGlassPrimary = tinycolor2(colors.primary)
      .setAlpha(0.12)
      .toString();
  }
  if (colors.secondary) {
    colors.secondaryLight = tinycolor2(colors.secondary).lighten(10).toString();
    colors.secondaryTooLight = tinycolor2(colors.secondary)
      .lighten(20)
      .toString();
    colors.secondaryDark = tinycolor2(colors.secondary).darken(7).toString();
    colors.secondaryTooDark = tinycolor2(colors.secondary)
      .darken(12)
      .toString();
    colors.secondaryText = tinycolor2(colors.secondary).isLight()
      ? 'var(--textPrimary)'
      : 'var(--textOpposite)';
    colors.secondaryTextOpposite = tinycolor2(colors.secondary).isLight()
      ? 'var(--textOpposite)'
      : 'var(--textPrimary)';
    colors.glassSecondary = tinycolor2(colors.secondary)
      .setAlpha(0.08)
      .toString();
    colors.darkGlassSecondary = tinycolor2(colors.secondary)
      .setAlpha(0.12)
      .toString();
    // ===
    colors.dm_secondaryLight = tinycolor2(colors.secondary)
      .lighten(10)
      .toString();
    colors.dm_secondaryTooLight = tinycolor2(colors.secondary)
      .lighten(20)
      .toString();
    colors.dm_secondaryDark = tinycolor2(colors.secondary).darken(7).toString();
    colors.dm_secondaryTooDark = tinycolor2(colors.secondary)
      .darken(12)
      .toString();
    colors.dm_secondaryText = tinycolor2(colors.secondary).isLight()
      ? 'var(--dm_textOpposite)'
      : 'var(--dm_textPrimary)';
    colors.dm_secondaryTextOpposite = tinycolor2(colors.secondary).isLight()
      ? 'var(--dm_textPrimary)'
      : 'var(--dm_textOpposite)';
    colors.dm_glassSecondary = tinycolor2(colors.secondary)
      .setAlpha(0.08)
      .toString();
    colors.dm_glassSecondary = tinycolor2(colors.secondary)
      .setAlpha(0.12)
      .toString();
  }
  if (colors.neutral) {
    colors.neutralLight = tinycolor2(colors.neutral).lighten(10).toString();
    colors.primaryTooLight = tinycolor2(colors.neutral).lighten(20).toString();
    colors.neutralDark = tinycolor2(colors.neutral).darken(7).toString();
    colors.neutralTooDark = tinycolor2(colors.neutral).darken(12).toString();
    colors.neutralText = tinycolor2(colors.neutral).isLight()
      ? 'var(--textPrimary)'
      : 'var(--textOpposite)';
    colors.neutralTextOpposite = tinycolor2(colors.neutral).isLight()
      ? 'var(--textOpposite)'
      : 'var(--textPrimary)';
    // ===
    colors.dm_neutralLight = tinycolor2(colors.neutral).lighten(10).toString();
    colors.dm_primaryTooLight = tinycolor2(colors.neutral)
      .lighten(20)
      .toString();
    colors.dm_neutralDark = tinycolor2(colors.neutral).darken(7).toString();
    colors.dm_neutralTooDark = tinycolor2(colors.neutral).darken(12).toString();
    colors.dm_neutralText = tinycolor2(colors.neutral).isLight()
      ? 'var(--dm_textOpposite)'
      : 'var(--dm_textPrimary)';
    colors.dm_neutralTextOpposite = tinycolor2(colors.neutral).isLight()
      ? 'var(--dm_textPrimary)'
      : 'var(--dm_textOpposite)';
    colors.dm_glassNeutral = tinycolor2(colors.neutral)
      .setAlpha(0.08)
      .toString();
    colors.dm_glassNeutral = tinycolor2(colors.neutral)
      .setAlpha(0.12)
      .toString();
  }
  if (colors.background) {
    colors.dm_background = colors.background;
  }
  if (colors.divider) {
    colors.dm_divider = colors.divider;
  }
  if (colors.link) {
    colors.dm_link = colors.link;
  }
  if (colors.error) {
    colors.dm_error = colors.error;
    colors.errorText = tinycolor2(colors.error).isLight()
      ? 'var(--textPrimary)'
      : 'var(--textOpposite)';
    colors.dm_errorText = tinycolor2(colors.error).isLight()
      ? 'var(--textPrimary)'
      : 'var(--textOpposite)';
  }
  if (colors.success) {
    colors.dm_success = colors.success;
    colors.successText = tinycolor2(colors.success).isLight()
      ? 'var(--textPrimary)'
      : 'var(--textOpposite)';
    colors.dm_successText = tinycolor2(colors.success).isLight()
      ? 'var(--textPrimary)'
      : 'var(--textOpposite)';
  }
  if (colors.disabled) {
    colors.dm_disabled = colors.disabled;
  }
  if (colors.backgroundSecondary) {
    colors.dm_backgroundSecondary = colors.backgroundSecondary;
  }
  if (colors.textPrimary) {
    colors.dm_textPrimary = colors.textPrimary;
  }
  if (colors.textSecondary) {
    colors.dm_textSecondary = colors.textSecondary;
  }

  if (colors) {
    for (let key in colors) {
      console.log(`${key}`, colors[key]);
      document.documentElement.style.setProperty(`--${key}`, colors[key]);
    }
  }
  if (lightMode) {
    for (let key in lightMode) {
      document.documentElement.style.setProperty(`--${key}`, lightMode[key]);
    }
  }
  if (darkMode) {
    if (darkMode.primary) {
      darkMode.primaryLight = tinycolor2(darkMode.primary)
        .lighten(10)
        .toString();
      darkMode.primaryTooLight = tinycolor2(darkMode.primary)
        .lighten(20)
        .toString();
      darkMode.primaryDark = tinycolor2(darkMode.primary).darken(7).toString();
      darkMode.primaryTooDark = tinycolor2(darkMode.primary)
        .darken(12)
        .toString();
      darkMode.primaryText = tinycolor2(darkMode.primary).isLight()
        ? 'var(--dm_textOpposite)'
        : 'var(--dm_textPrimary)';
      darkMode.primaryTextOpposite = tinycolor2(darkMode.primary).isLight()
        ? 'var(--dm_textPrimary)'
        : 'var(--dm_textOpposite)';
      darkMode.glassPrimary = tinycolor2(darkMode.primary)
        .setAlpha(0.08)
        .toString();
      darkMode.darkGlassPrimary = tinycolor2(darkMode.primary)
        .setAlpha(0.12)
        .toString();
    }
    if (darkMode.secondary) {
      darkMode.secondaryLight = tinycolor2(darkMode.secondary)
        .lighten(10)
        .toString();
      darkMode.secondaryTooLight = tinycolor2(darkMode.secondary)
        .lighten(20)
        .toString();
      darkMode.secondaryDark = tinycolor2(darkMode.secondary)
        .darken(7)
        .toString();
      darkMode.secondaryTooDark = tinycolor2(darkMode.secondary)
        .darken(12)
        .toString();
      darkMode.secondaryText = tinycolor2(darkMode.secondary).isLight()
        ? 'var(--dm_textOpposite)'
        : 'var(--dm_textPrimary)';
      darkMode.secondaryTextOpposite = tinycolor2(darkMode.secondary).isLight()
        ? 'var(--dm_textPrimary)'
        : 'var(--dm_textOpposite)';
      darkMode.glassSecondary = tinycolor2(darkMode.secondary)
        .setAlpha(0.08)
        .toString();
      darkMode.darkGlassSecondary = tinycolor2(darkMode.secondary)
        .setAlpha(0.12)
        .toString();
    }
    if (darkMode.neutral) {
      darkMode.neutralLight = tinycolor2(darkMode.neutral)
        .lighten(10)
        .toString();
      darkMode.neutralTooLight = tinycolor2(darkMode.neutral)
        .lighten(20)
        .toString();
      darkMode.neutralDark = tinycolor2(darkMode.neutral).darken(7).toString();
      darkMode.neutralTooDark = tinycolor2(darkMode.neutral)
        .darken(12)
        .toString();
      darkMode.neutralText = tinycolor2(darkMode.neutral).isLight()
        ? 'var(--dm_textOpposite)'
        : 'var(--dm_textPrimary)';
      darkMode.neutralTextOpposite = tinycolor2(darkMode.neutral).isLight()
        ? 'var(--dm_textPrimary)'
        : 'var(--dm_textOpposite)';
      darkMode.glassNeutral = tinycolor2(darkMode.neutral)
        .setAlpha(0.08)
        .toString();
      darkMode.darkGlassNeutral = tinycolor2(darkMode.neutral)
        .setAlpha(0.12)
        .toString();
    }
    if (darkMode.error) {
      darkMode.errorText = tinycolor2(darkMode.error).isLight()
        ? 'var(--dm_textOpposite)'
        : 'var(--dm_textPrimary)';
    }
    if (darkMode.success) {
      darkMode.successText = tinycolor2(darkMode.success).isLight()
        ? 'var(--dm_textOpposite)'
        : 'var(--dm_textPrimary)';
    }
    for (let key in darkMode) {
      console.log(`--dm_${key}`, darkMode[key]);
      document.documentElement.style.setProperty(`--dm_${key}`, darkMode[key]);
    }
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
      value={{ theme: theme, changeTheme: changeTheme, colors: colors }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
