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

const colors = {
  lightMode: {
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
    glass: tinycolor2('#000').setAlpha(0.03).toString(),
    darkGlass: tinycolor2('#000').setAlpha(0.05).toString(),
    skeletonLight: 'rgb(236, 235, 235)',
    skeletonDark: 'rgb(243, 243, 243)',
  },
  darkMode: {
    primary: '#eb0066',
    secondary: '#475979',
    neutral: '#46505c',
    error: '#d02a35',
    success: 'rgb(30, 158, 8)',
    disabled: 'rgb(82, 82, 82)',
    link: 'rgb(31, 136, 241)',
    background: '#000',
    backgroundSecondary: '#141414',
    textPrimary: '#fff',
    textSecondary: '#bcbcbc',
    textOpposite: '#000',
    divider: 'rgb(57, 57, 57)',
    baseBoxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
    glass: tinycolor2('#fff').setAlpha(0.05).toString(),
    darkGlass: tinycolor2('#fff').setAlpha(0.08).toString(),
    skeletonLight: 'rgb(31, 31, 31)',
    skeletonDark: 'rgb(25, 25, 25)',
  },
};
const calculatedColors: any = {
  lightMode: {
    primary: colors.lightMode.primary,
    primaryDark: tinycolor2(colors.lightMode.primary).darken(7).toString(),
    primaryTooDark: tinycolor2(colors.lightMode.primary).darken(10).toString(),
    primaryLight: tinycolor2(colors.lightMode.primary).lighten(7).toString(),
    primaryTooLight: tinycolor2(colors.lightMode.primary)
      .lighten(10)
      .toString(),
    glassPrimary: tinycolor2(colors.lightMode.primary)
      .setAlpha(0.08)
      .toString(),
    darkGlassPrimary: tinycolor2(colors.lightMode.primary)
      .setAlpha(0.12)
      .toString(),
    primaryText: tinycolor2(colors.lightMode.primary).isLight()
      ? '#000'
      : '#fff',
    secondary: colors.lightMode.secondary,
    secondaryDark: tinycolor2(colors.lightMode.secondary).darken(7).toString(),
    secondaryTooDark: tinycolor2(colors.lightMode.secondary)
      .darken(10)
      .toString(),
    secondaryLight: tinycolor2(colors.lightMode.secondary)
      .lighten(7)
      .toString(),
    secondaryTooLight: tinycolor2(colors.lightMode.secondary)
      .lighten(10)
      .toString(),
    glassSecondary: tinycolor2(colors.lightMode.secondary)
      .setAlpha(0.08)
      .toString(),
    darkGlassSecondary: tinycolor2(colors.lightMode.secondary)
      .setAlpha(0.12)
      .toString(),
    secondaryText: tinycolor2(colors.lightMode.secondary).isLight()
      ? '#000'
      : '#fff',
    neutral: colors.lightMode.neutral,
    neutralDark: tinycolor2(colors.lightMode.neutral).darken(7).toString(),
    neutralTooDark: tinycolor2(colors.lightMode.neutral).darken(10).toString(),
    neutralLight: tinycolor2(colors.lightMode.neutral).lighten(7).toString(),
    neutralTooLight: tinycolor2(colors.lightMode.neutral)
      .lighten(10)
      .toString(),
    glassNeutral: tinycolor2(colors.lightMode.neutral)
      .setAlpha(0.08)
      .toString(),
    darkGlassNeutral: tinycolor2(colors.lightMode.neutral)
      .setAlpha(0.12)
      .toString(),
    neutralText: tinycolor2(colors.lightMode.neutral).isLight()
      ? '#000'
      : '#fff',
    error: colors.lightMode.error,
    errorText: tinycolor2(colors.lightMode.error).isLight() ? '#000' : '#fff',
    glassError: tinycolor2(colors.lightMode.error).setAlpha(0.08).toString(),
    darkGlassError: tinycolor2(colors.lightMode.error)
      .setAlpha(0.12)
      .toString(),
    success: colors.lightMode.success,
    successText: tinycolor2(colors.lightMode.success).isLight()
      ? '#000'
      : '#fff',
    glassSuccess: tinycolor2(colors.lightMode.success)
      .setAlpha(0.08)
      .toString(),
    darkGlassSuccess: tinycolor2(colors.lightMode.success)
      .setAlpha(0.12)
      .toString(),
    disabled: colors.lightMode.disabled,
    link: colors.lightMode.link,
    background: colors.lightMode.background,
    backgroundSecondary: colors.lightMode.backgroundSecondary,
    textPrimary: colors.lightMode.textPrimary,
    textSecondary: colors.lightMode.textSecondary,
    textOpposite: colors.lightMode.textOpposite,
    divider: colors.lightMode.divider,
    baseBoxShadow: colors.lightMode.baseBoxShadow,
    glass: colors.lightMode.glass,
    darkGlass: colors.lightMode.darkGlass,
    skeletonLight: colors.lightMode.skeletonLight,
    skeletonDark: colors.lightMode.skeletonDark,
  },
  darkMode: {
    primary: colors.darkMode.primary,
    primaryDark: tinycolor2(colors.darkMode.primary).darken(7).toString(),
    primaryTooDark: tinycolor2(colors.darkMode.primary).darken(10).toString(),
    primaryLight: tinycolor2(colors.darkMode.primary).lighten(7).toString(),
    primaryTooLight: tinycolor2(colors.darkMode.primary).lighten(10).toString(),
    glassPrimary: tinycolor2(colors.darkMode.primary).setAlpha(0.08).toString(),
    darkGlassPrimary: tinycolor2(colors.darkMode.primary)
      .setAlpha(0.12)
      .toString(),
    primaryText: tinycolor2(colors.darkMode.primary).isLight()
      ? '#000'
      : '#fff',
    secondary: colors.darkMode.secondary,
    secondaryDark: tinycolor2(colors.darkMode.secondary).darken(7).toString(),
    secondaryTooDark: tinycolor2(colors.darkMode.secondary)
      .darken(10)
      .toString(),
    secondaryLight: tinycolor2(colors.darkMode.secondary).lighten(7).toString(),
    secondaryTooLight: tinycolor2(colors.darkMode.secondary)
      .lighten(10)
      .toString(),
    glassSecondary: tinycolor2(colors.darkMode.secondary)
      .setAlpha(0.08)
      .toString(),
    darkGlassSecondary: tinycolor2(colors.darkMode.secondary)
      .setAlpha(0.12)
      .toString(),
    secondaryText: tinycolor2(colors.darkMode.secondary).isLight()
      ? '#000'
      : '#fff',
    neutral: colors.darkMode.neutral,
    neutralDark: tinycolor2(colors.darkMode.neutral).darken(7).toString(),
    neutralTooDark: tinycolor2(colors.darkMode.neutral).darken(10).toString(),
    neutralLight: tinycolor2(colors.darkMode.neutral).lighten(7).toString(),
    neutralTooLight: tinycolor2(colors.darkMode.neutral).lighten(10).toString(),
    glassNeutral: tinycolor2(colors.darkMode.neutral).setAlpha(0.08).toString(),
    darkGlassNeutral: tinycolor2(colors.darkMode.neutral)
      .setAlpha(0.12)
      .toString(),
    neutralText: tinycolor2(colors.darkMode.neutral).isLight()
      ? '#000'
      : '#fff',
    error: colors.darkMode.error,
    errorText: tinycolor2(colors.darkMode.error).isLight() ? '#000' : '#fff',
    glassError: tinycolor2(colors.darkMode.error).setAlpha(0.08).toString(),
    darkGlassError: tinycolor2(colors.darkMode.error).setAlpha(0.12).toString(),
    success: colors.darkMode.success,
    successText: tinycolor2(colors.darkMode.success).isLight()
      ? '#000'
      : '#fff',
    glassSuccess: tinycolor2(colors.darkMode.success).setAlpha(0.08).toString(),
    darkGlassSuccess: tinycolor2(colors.darkMode.success)
      .setAlpha(0.12)
      .toString(),
    disabled: colors.darkMode.disabled,
    link: colors.darkMode.link,
    background: colors.darkMode.background,
    backgroundSecondary: colors.darkMode.backgroundSecondary,
    textPrimary: colors.darkMode.textPrimary,
    textSecondary: colors.darkMode.textSecondary,
    textOpposite: colors.darkMode.textOpposite,
    divider: colors.darkMode.divider,
    baseBoxShadow: colors.darkMode.baseBoxShadow,
    glass: colors.darkMode.glass,
    darkGlass: colors.darkMode.darkGlass,
    skeletonLight: colors.darkMode.skeletonLight,
    skeletonDark: colors.darkMode.skeletonDark,
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
  const localStorageTheme = window.localStorage.getItem('theme');
  const [theme, setTheme] = useState(
    localStorageTheme ? localStorageTheme : getDefaultTheme()
  );
  function changeTheme(theme: 'light' | 'dark' | 'system') {
    setTheme(theme);
  }

  if (font) {
    if (font.size) {
      for (let key in font.size) {
        document.body.style.setProperty(
          `--fontSize${key[0].toLocaleUpperCase()}${key.slice(1)}`,
          font.size[key]
        );
      }
    }
    if (font.family) {
      document.body.style.setProperty(`--fontFamily`, font.family);
    }
  }

  if (colors.primary) {
    colors.primaryLight = tinycolor2(colors.primary).lighten(7).toString();
    colors.primaryTooLight = tinycolor2(colors.primary).lighten(10).toString();
    colors.primaryDark = tinycolor2(colors.primary).darken(7).toString();
    colors.primaryTooDark = tinycolor2(colors.primary).darken(10).toString();
    colors.glassPrimary = tinycolor2(colors.primary).setAlpha(0.08).toString();
    colors.darkGlassPrimary = tinycolor2(colors.primary)
      .setAlpha(0.12)
      .toString();
  }
  if (colors.secondary) {
    colors.secondaryLight = tinycolor2(colors.secondary).lighten(7).toString();
    colors.secondaryTooLight = tinycolor2(colors.secondary)
      .lighten(10)
      .toString();
    colors.secondaryDark = tinycolor2(colors.secondary).darken(7).toString();
    colors.secondaryTooDark = tinycolor2(colors.secondary)
      .darken(10)
      .toString();
    colors.glassSecondary = tinycolor2(colors.secondary)
      .setAlpha(0.08)
      .toString();
    colors.darkGlassSecondary = tinycolor2(colors.secondary)
      .setAlpha(0.12)
      .toString();
  }
  if (colors.neutral) {
    colors.neutralLight = tinycolor2(colors.neutral).lighten(7).toString();
    colors.neutralTooLight = tinycolor2(colors.neutral).lighten(10).toString();
    colors.neutralDark = tinycolor2(colors.neutral).darken(7).toString();
    colors.neutralTooDark = tinycolor2(colors.neutral).darken(10).toString();
    colors.glassNeutral = tinycolor2(colors.neutral).setAlpha(0.08).toString();
    colors.darkGlassNeutral = tinycolor2(colors.neutral)
      .setAlpha(0.12)
      .toString();
  }
  if (colors.error) {
    colors.glassError = tinycolor2(colors.error).setAlpha(0.08).toString();
    colors.darkGlassError = tinycolor2(colors.error).setAlpha(0.12).toString();
  }
  if (colors.success) {
    colors.glassSuccess = tinycolor2(colors.success).setAlpha(0.08).toString();
    colors.darkGlassSuccess = tinycolor2(colors.success)
      .setAlpha(0.12)
      .toString();
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

    if (document.documentElement.dataset.theme == 'light') {
      if (colors.primary) {
        colors.primaryText = tinycolor2(colors.primary).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        colors.primaryTextOpposite = tinycolor2(colors.primary).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
      }
      if (colors.secondary) {
        colors.secondaryText = tinycolor2(colors.secondary).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        colors.secondaryTextOpposite = tinycolor2(colors.secondary).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
      }
      if (colors.neutral) {
        colors.neutralText = tinycolor2(colors.neutral).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        colors.neutralTextOpposite = tinycolor2(colors.neutral).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
      }
      if (colors.error) {
        colors.errorText = tinycolor2(colors.error).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
      }
      if (colors.success) {
        colors.successText = tinycolor2(colors.success).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
      }
    } else {
      if (colors.primary) {
        colors.primaryText = tinycolor2(colors.primary).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        colors.primaryTextOpposite = tinycolor2(colors.primary).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
      }
      if (colors.secondary) {
        colors.secondaryText = tinycolor2(colors.secondary).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        colors.secondaryTextOpposite = tinycolor2(colors.secondary).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
      }
      if (colors.neutral) {
        colors.neutralText = tinycolor2(colors.neutral).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        colors.neutralTextOpposite = tinycolor2(colors.neutral).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
      }
      if (colors.error) {
        colors.errorText = tinycolor2(colors.error).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
      }
      if (colors.success) {
        colors.successText = tinycolor2(colors.success).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
      }
    }

    if (lightMode) {
      if (lightMode.primary) {
        lightMode.primaryLight = tinycolor2(lightMode.primary)
          .lighten(7)
          .toString();
        lightMode.primaryTooLight = tinycolor2(lightMode.primary)
          .lighten(10)
          .toString();
        lightMode.primaryDark = tinycolor2(lightMode.primary)
          .darken(7)
          .toString();
        lightMode.primaryTooDark = tinycolor2(lightMode.primary)
          .darken(10)
          .toString();
        lightMode.primaryText = tinycolor2(lightMode.primary).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        lightMode.primaryTextOpposite = tinycolor2(lightMode.primary).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        lightMode.glassPrimary = tinycolor2(lightMode.primary)
          .setAlpha(0.08)
          .toString();
        lightMode.darkGlassPrimary = tinycolor2(lightMode.primary)
          .setAlpha(0.12)
          .toString();
      }
      if (lightMode.secondary) {
        lightMode.secondaryLight = tinycolor2(lightMode.secondary)
          .lighten(7)
          .toString();
        lightMode.secondaryTooLight = tinycolor2(lightMode.secondary)
          .lighten(10)
          .toString();
        lightMode.secondaryDark = tinycolor2(lightMode.secondary)
          .darken(7)
          .toString();
        lightMode.secondaryTooDark = tinycolor2(lightMode.secondary)
          .darken(10)
          .toString();
        lightMode.secondaryText = tinycolor2(lightMode.secondary).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        lightMode.secondaryTextOpposite = tinycolor2(
          lightMode.secondary
        ).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        lightMode.glassSecondary = tinycolor2(lightMode.secondary)
          .setAlpha(0.08)
          .toString();
        lightMode.darkGlassSecondary = tinycolor2(lightMode.secondary)
          .setAlpha(0.12)
          .toString();
      }

      if (lightMode.neutral) {
        lightMode.neutralLight = tinycolor2(lightMode.neutral)
          .lighten(7)
          .toString();
        lightMode.neutralTooLight = tinycolor2(lightMode.neutral)
          .lighten(10)
          .toString();
        lightMode.neutralDark = tinycolor2(lightMode.neutral)
          .darken(7)
          .toString();
        lightMode.neutralTooDark = tinycolor2(lightMode.neutral)
          .darken(10)
          .toString();
        lightMode.neutralText = tinycolor2(lightMode.neutral).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        lightMode.neutralTextOpposite = tinycolor2(lightMode.neutral).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
      }
      if (lightMode.error) {
        lightMode.errorText = tinycolor2(lightMode.error).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
      }
      if (lightMode.success) {
        lightMode.successText = tinycolor2(lightMode.success).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
      }
    }

    if (darkMode) {
      if (darkMode.primary) {
        darkMode.primaryLight = tinycolor2(darkMode.primary)
          .lighten(7)
          .toString();
        darkMode.primaryTooLight = tinycolor2(darkMode.primary)
          .lighten(10)
          .toString();
        darkMode.primaryDark = tinycolor2(darkMode.primary)
          .darken(7)
          .toString();
        darkMode.primaryTooDark = tinycolor2(darkMode.primary)
          .darken(10)
          .toString();
        darkMode.primaryText = tinycolor2(darkMode.primary).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        darkMode.primaryTextOpposite = tinycolor2(darkMode.primary).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        darkMode.glassPrimary = tinycolor2(darkMode.primary)
          .setAlpha(0.08)
          .toString();
        darkMode.darkGlassPrimary = tinycolor2(darkMode.primary)
          .setAlpha(0.12)
          .toString();
      }
      if (darkMode.secondary) {
        darkMode.secondaryLight = tinycolor2(darkMode.secondary)
          .lighten(7)
          .toString();
        darkMode.secondaryTooLight = tinycolor2(darkMode.secondary)
          .lighten(10)
          .toString();
        darkMode.secondaryDark = tinycolor2(darkMode.secondary)
          .darken(7)
          .toString();
        darkMode.secondaryTooDark = tinycolor2(darkMode.secondary)
          .darken(10)
          .toString();
        darkMode.secondaryText = tinycolor2(darkMode.secondary).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        darkMode.secondaryTextOpposite = tinycolor2(
          darkMode.secondary
        ).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        darkMode.glassSecondary = tinycolor2(darkMode.secondary)
          .setAlpha(0.08)
          .toString();
        darkMode.darkGlassSecondary = tinycolor2(darkMode.secondary)
          .setAlpha(0.12)
          .toString();
      }
      if (darkMode.neutral) {
        darkMode.neutralLight = tinycolor2(darkMode.neutral)
          .lighten(7)
          .toString();
        darkMode.neutralTooLight = tinycolor2(darkMode.neutral)
          .lighten(10)
          .toString();
        darkMode.neutralDark = tinycolor2(darkMode.neutral)
          .darken(7)
          .toString();
        darkMode.neutralTooDark = tinycolor2(darkMode.neutral)
          .darken(10)
          .toString();
        darkMode.neutralText = tinycolor2(darkMode.neutral).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        darkMode.neutralTextOpposite = tinycolor2(darkMode.neutral).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        darkMode.glassNeutral = tinycolor2(darkMode.neutral)
          .setAlpha(0.08)
          .toString();
        darkMode.darkGlassNeutral = tinycolor2(darkMode.neutral)
          .setAlpha(0.12)
          .toString();
      }
      if (darkMode.error) {
        darkMode.errorText = tinycolor2(darkMode.error).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
      }
      if (darkMode.success) {
        darkMode.successText = tinycolor2(darkMode.success).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
      }

      if (document.documentElement.dataset.theme == 'dark') {
        for (let key in darkMode) {
          document.body.style.setProperty(`--${key}`, darkMode[key]);
        }
      }
    }
    if (document.documentElement.dataset.theme == 'light') {
      for (let key in calculatedColors.lightMode) {
        document.body.style.setProperty(
          `--${key}`,
          calculatedColors.lightMode[key]
        );
      }
      if (colors) {
        for (let key in colors) {
          document.body.style.setProperty(`--${key}`, colors[key]);
          console.log(`--${key}`, colors[key]);
        }
      }
      for (let key in lightMode) {
        document.body.style.setProperty(`--${key}`, lightMode[key]);
      }
    }
    if (document.documentElement.dataset.theme == 'dark') {
      for (let key in calculatedColors.darkMode) {
        document.body.style.setProperty(
          `--${key}`,
          calculatedColors.darkMode[key]
        );
      }
      if (colors) {
        for (let key in colors) {
          document.body.style.setProperty(`--${key}`, colors[key]);
          console.log(`--${key}`, colors[key]);
        }
      }
      for (let key in darkMode) {
        document.body.style.setProperty(`--${key}`, darkMode[key]);
      }
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
