'use strict';

var _react = require('react');
var _tinycolor = _interopRequireDefault(require('tinycolor2'));
var _jsxRuntime = require('react/jsx-runtime');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const ThemeContext = /*#__PURE__*/ (0, _react.createContext)({
  theme: '',
  changeTheme: () => {},
  colors: {},
});
const light = 5;
const tooLight = 10;
const dark = 5;
const tooDark = 10;
const glass = 0.08;
const darkGlass = 0.12;
const dm_glass = 0.15;
const dm_darkGlass = 0.2;
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
    glass: (0, _tinycolor.default)('#000').setAlpha(0.04).toString(),
    darkGlass: (0, _tinycolor.default)('#000').setAlpha(0.06).toString(),
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
    glass: (0, _tinycolor.default)('#fff').setAlpha(0.07).toString(),
    darkGlass: (0, _tinycolor.default)('#fff').setAlpha(0.1).toString(),
    skeletonLight: 'rgb(31, 31, 31)',
    skeletonDark: 'rgb(25, 25, 25)',
  },
};
const calculatedColors = {
  lightMode: {
    fontFamily: "'system-ui', sans-serif",
    fontSizeMedium: '0.875rem',
    fontSizeSmall: '0.8125rem',
    fontSizeLarge: '0.9375rem',
    primary: colors.lightMode.primary,
    primaryDark: (0, _tinycolor.default)(colors.lightMode.primary)
      .darken(dark)
      .toString(),
    primaryTooDark: (0, _tinycolor.default)(colors.lightMode.primary)
      .darken(tooDark)
      .toString(),
    primaryLight: (0, _tinycolor.default)(colors.lightMode.primary)
      .lighten(light)
      .toString(),
    primaryTooLight: (0, _tinycolor.default)(colors.lightMode.primary)
      .lighten(tooLight)
      .toString(),
    glassPrimary: (0, _tinycolor.default)(colors.lightMode.primary)
      .setAlpha(glass)
      .toString(),
    darkGlassPrimary: (0, _tinycolor.default)(colors.lightMode.primary)
      .setAlpha(darkGlass)
      .toString(),
    primaryText: (0, _tinycolor.default)(colors.lightMode.primary).isLight()
      ? '#000'
      : '#fff',
    secondary: colors.lightMode.secondary,
    secondaryDark: (0, _tinycolor.default)(colors.lightMode.secondary)
      .darken(dark)
      .toString(),
    secondaryTooDark: (0, _tinycolor.default)(colors.lightMode.secondary)
      .darken(tooDark)
      .toString(),
    secondaryLight: (0, _tinycolor.default)(colors.lightMode.secondary)
      .lighten(light)
      .toString(),
    secondaryTooLight: (0, _tinycolor.default)(colors.lightMode.secondary)
      .lighten(tooLight)
      .toString(),
    glassSecondary: (0, _tinycolor.default)(colors.lightMode.secondary)
      .setAlpha(glass)
      .toString(),
    darkGlassSecondary: (0, _tinycolor.default)(colors.lightMode.secondary)
      .setAlpha(darkGlass)
      .toString(),
    secondaryText: (0, _tinycolor.default)(colors.lightMode.secondary).isLight()
      ? '#000'
      : '#fff',
    neutral: colors.lightMode.neutral,
    neutralDark: (0, _tinycolor.default)(colors.lightMode.neutral)
      .darken(dark)
      .toString(),
    neutralTooDark: (0, _tinycolor.default)(colors.lightMode.neutral)
      .darken(tooDark)
      .toString(),
    neutralLight: (0, _tinycolor.default)(colors.lightMode.neutral)
      .lighten(light)
      .toString(),
    neutralTooLight: (0, _tinycolor.default)(colors.lightMode.neutral)
      .lighten(tooLight)
      .toString(),
    glassNeutral: (0, _tinycolor.default)(colors.lightMode.neutral)
      .setAlpha(glass)
      .toString(),
    darkGlassNeutral: (0, _tinycolor.default)(colors.lightMode.neutral)
      .setAlpha(darkGlass)
      .toString(),
    neutralText: (0, _tinycolor.default)(colors.lightMode.neutral).isLight()
      ? '#000'
      : '#fff',
    error: colors.lightMode.error,
    errorDark: (0, _tinycolor.default)(colors.lightMode.error).darken(dark),
    errorTooDark: (0, _tinycolor.default)(colors.lightMode.error).darken(
      tooDark
    ),
    errorLight: (0, _tinycolor.default)(colors.lightMode.error)
      .lighten(light)
      .toString(),
    errorTooLight: (0, _tinycolor.default)(colors.lightMode.error)
      .lighten(tooLight)
      .toString(),
    errorText: (0, _tinycolor.default)(colors.lightMode.error).isLight()
      ? '#000'
      : '#fff',
    glassError: (0, _tinycolor.default)(colors.lightMode.error)
      .setAlpha(glass)
      .toString(),
    darkGlassError: (0, _tinycolor.default)(colors.lightMode.error)
      .setAlpha(darkGlass)
      .toString(),
    success: colors.lightMode.success,
    successDark: (0, _tinycolor.default)(colors.lightMode.success).darken(dark),
    successTooDark: (0, _tinycolor.default)(colors.lightMode.success).darken(
      tooDark
    ),
    successLight: (0, _tinycolor.default)(colors.lightMode.success)
      .lighten(light)
      .toString(),
    successTooLight: (0, _tinycolor.default)(colors.lightMode.success)
      .lighten(tooLight)
      .toString(),
    successText: (0, _tinycolor.default)(colors.lightMode.success).isLight()
      ? '#000'
      : '#fff',
    glassSuccess: (0, _tinycolor.default)(colors.lightMode.success)
      .setAlpha(glass)
      .toString(),
    darkGlassSuccess: (0, _tinycolor.default)(colors.lightMode.success)
      .setAlpha(darkGlass)
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
    fontFamily: "'system-ui', sans-serif",
    fontSizeMedium: '0.875rem',
    fontSizeSmall: '0.8125rem',
    fontSizeLarge: '0.9375rem',
    primary: colors.darkMode.primary,
    primaryDark: (0, _tinycolor.default)(colors.darkMode.primary)
      .darken(dark)
      .toString(),
    primaryTooDark: (0, _tinycolor.default)(colors.darkMode.primary)
      .darken(tooDark)
      .toString(),
    primaryLight: (0, _tinycolor.default)(colors.darkMode.primary)
      .lighten(light)
      .toString(),
    primaryTooLight: (0, _tinycolor.default)(colors.darkMode.primary)
      .lighten(tooLight)
      .toString(),
    glassPrimary: (0, _tinycolor.default)(colors.darkMode.primary)
      .setAlpha(dm_glass)
      .toString(),
    darkGlassPrimary: (0, _tinycolor.default)(colors.darkMode.primary)
      .setAlpha(dm_darkGlass)
      .toString(),
    primaryText: (0, _tinycolor.default)(colors.darkMode.primary).isLight()
      ? '#000'
      : '#fff',
    secondary: colors.darkMode.secondary,
    secondaryDark: (0, _tinycolor.default)(colors.darkMode.secondary)
      .darken(dark)
      .toString(),
    secondaryTooDark: (0, _tinycolor.default)(colors.darkMode.secondary)
      .darken(tooDark)
      .toString(),
    secondaryLight: (0, _tinycolor.default)(colors.darkMode.secondary)
      .lighten(light)
      .toString(),
    secondaryTooLight: (0, _tinycolor.default)(colors.darkMode.secondary)
      .lighten(tooLight)
      .toString(),
    glassSecondary: (0, _tinycolor.default)(colors.darkMode.secondary)
      .setAlpha(dm_glass)
      .toString(),
    darkGlassSecondary: (0, _tinycolor.default)(colors.darkMode.secondary)
      .setAlpha(dm_darkGlass)
      .toString(),
    secondaryText: (0, _tinycolor.default)(colors.darkMode.secondary).isLight()
      ? '#000'
      : '#fff',
    neutral: colors.darkMode.neutral,
    neutralDark: (0, _tinycolor.default)(colors.darkMode.neutral)
      .darken(dark)
      .toString(),
    neutralTooDark: (0, _tinycolor.default)(colors.darkMode.neutral)
      .darken(tooDark)
      .toString(),
    neutralLight: (0, _tinycolor.default)(colors.darkMode.neutral)
      .lighten(light)
      .toString(),
    neutralTooLight: (0, _tinycolor.default)(colors.darkMode.neutral)
      .lighten(tooLight)
      .toString(),
    glassNeutral: (0, _tinycolor.default)(colors.darkMode.neutral)
      .setAlpha(dm_glass)
      .toString(),
    darkGlassNeutral: (0, _tinycolor.default)(colors.darkMode.neutral)
      .setAlpha(dm_darkGlass)
      .toString(),
    neutralText: (0, _tinycolor.default)(colors.darkMode.neutral).isLight()
      ? '#000'
      : '#fff',
    error: colors.darkMode.error,
    errorDark: (0, _tinycolor.default)(colors.darkMode.error)
      .darken(dark)
      .toString(),
    errorTooDark: (0, _tinycolor.default)(colors.darkMode.error)
      .darken(tooDark)
      .toString(),
    errorLight: (0, _tinycolor.default)(colors.darkMode.error)
      .lighten(light)
      .toString(),
    errorTooLight: (0, _tinycolor.default)(colors.darkMode.error)
      .lighten(tooLight)
      .toString(),
    errorText: (0, _tinycolor.default)(colors.darkMode.error).isLight()
      ? '#000'
      : '#fff',
    glassError: (0, _tinycolor.default)(colors.darkMode.error)
      .setAlpha(dm_glass)
      .toString(),
    darkGlassError: (0, _tinycolor.default)(colors.darkMode.error)
      .setAlpha(dm_darkGlass)
      .toString(),
    success: colors.darkMode.success,
    successDark: (0, _tinycolor.default)(colors.darkMode.success)
      .darken(dark)
      .toString(),
    successTooDark: (0, _tinycolor.default)(colors.darkMode.success)
      .darken(tooDark)
      .toString(),
    successLight: (0, _tinycolor.default)(colors.darkMode.success)
      .lighten(light)
      .toString(),
    successTooLight: (0, _tinycolor.default)(colors.darkMode.success)
      .lighten(tooLight)
      .toString(),
    successText: (0, _tinycolor.default)(colors.darkMode.success).isLight()
      ? '#000'
      : '#fff',
    glassSuccess: (0, _tinycolor.default)(colors.darkMode.success)
      .setAlpha(dm_glass)
      .toString(),
    darkGlassSuccess: (0, _tinycolor.default)(colors.darkMode.success)
      .setAlpha(dm_darkGlass)
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
const ThemeProvider = ({ themeOptions = {}, children }) => {
  const colors = themeOptions.colors || {};
  const darkMode = themeOptions.darkMode || {};
  const lightMode = themeOptions.lightMode || {};
  const font = themeOptions.font || {};
  const [theme, setTheme] = (0, _react.useState)('');
  function changeTheme(theme) {
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
      for (let key in font.family) {
        document.body.style.setProperty(`--${key}`, font.family[key]);
      }
    }
  }
  if (colors.primary) {
    colors.primaryLight = (0, _tinycolor.default)(colors.primary)
      .lighten(light)
      .toString();
    colors.primaryTooLight = (0, _tinycolor.default)(colors.primary)
      .lighten(tooLight)
      .toString();
    colors.primaryDark = (0, _tinycolor.default)(colors.primary)
      .darken(dark)
      .toString();
    colors.primaryTooDark = (0, _tinycolor.default)(colors.primary)
      .darken(tooDark)
      .toString();
    colors.glassPrimary = (0, _tinycolor.default)(colors.primary)
      .setAlpha(glass)
      .toString();
    colors.darkGlassPrimary = (0, _tinycolor.default)(colors.primary)
      .setAlpha(darkGlass)
      .toString();
  }
  if (colors.secondary) {
    colors.secondaryLight = (0, _tinycolor.default)(colors.secondary)
      .lighten(light)
      .toString();
    colors.secondaryTooLight = (0, _tinycolor.default)(colors.secondary)
      .lighten(tooLight)
      .toString();
    colors.secondaryDark = (0, _tinycolor.default)(colors.secondary)
      .darken(dark)
      .toString();
    colors.secondaryTooDark = (0, _tinycolor.default)(colors.secondary)
      .darken(tooDark)
      .toString();
    colors.glassSecondary = (0, _tinycolor.default)(colors.secondary)
      .setAlpha(glass)
      .toString();
    colors.darkGlassSecondary = (0, _tinycolor.default)(colors.secondary)
      .setAlpha(darkGlass)
      .toString();
  }
  if (colors.neutral) {
    colors.neutralLight = (0, _tinycolor.default)(colors.neutral)
      .lighten(light)
      .toString();
    colors.neutralTooLight = (0, _tinycolor.default)(colors.neutral)
      .lighten(tooLight)
      .toString();
    colors.neutralDark = (0, _tinycolor.default)(colors.neutral)
      .darken(dark)
      .toString();
    colors.neutralTooDark = (0, _tinycolor.default)(colors.neutral)
      .darken(tooDark)
      .toString();
    colors.glassNeutral = (0, _tinycolor.default)(colors.neutral)
      .setAlpha(glass)
      .toString();
    colors.darkGlassNeutral = (0, _tinycolor.default)(colors.neutral)
      .setAlpha(darkGlass)
      .toString();
  }
  if (colors.error) {
    colors.glassError = (0, _tinycolor.default)(colors.error)
      .setAlpha(glass)
      .toString();
    colors.darkGlassError = (0, _tinycolor.default)(colors.error)
      .setAlpha(darkGlass)
      .toString();
    colors.errorLight = (0, _tinycolor.default)(colors.error)
      .lighten(light)
      .toString();
    colors.errorTooLight = (0, _tinycolor.default)(colors.error)
      .lighten(tooLight)
      .toString();
    colors.errorDark = (0, _tinycolor.default)(colors.error)
      .darken(dark)
      .toString();
    colors.errorTooDark = (0, _tinycolor.default)(colors.error)
      .darken(tooDark)
      .toString();
  }
  if (colors.success) {
    colors.glassSuccess = (0, _tinycolor.default)(colors.success)
      .setAlpha(glass)
      .toString();
    colors.darkGlassSuccess = (0, _tinycolor.default)(colors.success)
      .setAlpha(darkGlass)
      .toString();
    colors.successLight = (0, _tinycolor.default)(colors.success)
      .lighten(light)
      .toString();
    colors.successTooLight = (0, _tinycolor.default)(colors.success)
      .lighten(tooLight)
      .toString();
    colors.successDark = (0, _tinycolor.default)(colors.success)
      .darken(dark)
      .toString();
    colors.successTooDark = (0, _tinycolor.default)(colors.success)
      .darken(tooDark)
      .toString();
  }
  (0, _react.useEffect)(() => {
    const isBrowserDefaultDark = () =>
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const getDefaultTheme = () => {
      const localStorageTheme = localStorage.getItem('theme');
      const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
      return localStorageTheme || browserDefault;
    };
    changeTheme(getDefaultTheme());
    switch (getDefaultTheme()) {
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
  }, []);
  (0, _react.useEffect)(() => {
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
    }
    if (document.documentElement.dataset.theme == 'light') {
      if (colors.primary) {
        colors.primaryText = (0, _tinycolor.default)(colors.primary).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        colors.primaryTextOpposite = (0, _tinycolor.default)(
          colors.primary
        ).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
      }
      if (colors.secondary) {
        colors.secondaryText = (0, _tinycolor.default)(
          colors.secondary
        ).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        colors.secondaryTextOpposite = (0, _tinycolor.default)(
          colors.secondary
        ).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
      }
      if (colors.neutral) {
        colors.neutralText = (0, _tinycolor.default)(colors.neutral).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        colors.neutralTextOpposite = (0, _tinycolor.default)(
          colors.neutral
        ).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
      }
      if (colors.error) {
        colors.errorText = (0, _tinycolor.default)(colors.error).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
      }
      if (colors.success) {
        colors.successText = (0, _tinycolor.default)(colors.success).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
      }
    } else {
      if (colors.primary) {
        colors.primaryText = (0, _tinycolor.default)(colors.primary).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        colors.primaryTextOpposite = (0, _tinycolor.default)(
          colors.primary
        ).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
      }
      if (colors.secondary) {
        colors.secondaryText = (0, _tinycolor.default)(
          colors.secondary
        ).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        colors.secondaryTextOpposite = (0, _tinycolor.default)(
          colors.secondary
        ).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
      }
      if (colors.neutral) {
        colors.neutralText = (0, _tinycolor.default)(colors.neutral).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        colors.neutralTextOpposite = (0, _tinycolor.default)(
          colors.neutral
        ).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
      }
      if (colors.error) {
        colors.errorText = (0, _tinycolor.default)(colors.error).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
      }
      if (colors.success) {
        colors.successText = (0, _tinycolor.default)(colors.success).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
      }
    }
    if (lightMode) {
      if (lightMode.primary) {
        lightMode.primaryLight = (0, _tinycolor.default)(lightMode.primary)
          .lighten(light)
          .toString();
        lightMode.primaryTooLight = (0, _tinycolor.default)(lightMode.primary)
          .lighten(tooLight)
          .toString();
        lightMode.primaryDark = (0, _tinycolor.default)(lightMode.primary)
          .darken(dark)
          .toString();
        lightMode.primaryTooDark = (0, _tinycolor.default)(lightMode.primary)
          .darken(tooDark)
          .toString();
        lightMode.primaryText = (0, _tinycolor.default)(
          lightMode.primary
        ).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        lightMode.primaryTextOpposite = (0, _tinycolor.default)(
          lightMode.primary
        ).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        lightMode.glassPrimary = (0, _tinycolor.default)(lightMode.primary)
          .setAlpha(glass)
          .toString();
        lightMode.darkGlassPrimary = (0, _tinycolor.default)(lightMode.primary)
          .setAlpha(darkGlass)
          .toString();
      }
      if (lightMode.secondary) {
        lightMode.secondaryLight = (0, _tinycolor.default)(lightMode.secondary)
          .lighten(light)
          .toString();
        lightMode.secondaryTooLight = (0, _tinycolor.default)(
          lightMode.secondary
        )
          .lighten(tooLight)
          .toString();
        lightMode.secondaryDark = (0, _tinycolor.default)(lightMode.secondary)
          .darken(dark)
          .toString();
        lightMode.secondaryTooDark = (0, _tinycolor.default)(
          lightMode.secondary
        )
          .darken(tooDark)
          .toString();
        lightMode.secondaryText = (0, _tinycolor.default)(
          lightMode.secondary
        ).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        lightMode.secondaryTextOpposite = (0, _tinycolor.default)(
          lightMode.secondary
        ).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        lightMode.glassSecondary = (0, _tinycolor.default)(lightMode.secondary)
          .setAlpha(glass)
          .toString();
        lightMode.darkGlassSecondary = (0, _tinycolor.default)(
          lightMode.secondary
        )
          .setAlpha(darkGlass)
          .toString();
      }
      if (lightMode.neutral) {
        lightMode.neutralLight = (0, _tinycolor.default)(lightMode.neutral)
          .lighten(light)
          .toString();
        lightMode.neutralTooLight = (0, _tinycolor.default)(lightMode.neutral)
          .lighten(tooLight)
          .toString();
        lightMode.neutralDark = (0, _tinycolor.default)(lightMode.neutral)
          .darken(dark)
          .toString();
        lightMode.neutralTooDark = (0, _tinycolor.default)(lightMode.neutral)
          .darken(tooDark)
          .toString();
        lightMode.neutralText = (0, _tinycolor.default)(
          lightMode.neutral
        ).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        lightMode.neutralTextOpposite = (0, _tinycolor.default)(
          lightMode.neutral
        ).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        lightMode.glassNeutral = (0, _tinycolor.default)(lightMode.neutral)
          .setAlpha(glass)
          .toString();
        lightMode.glassNeutral = (0, _tinycolor.default)(lightMode.neutral)
          .setAlpha(darkGlass)
          .toString();
      }
      if (lightMode.error) {
        lightMode.errorText = (0, _tinycolor.default)(lightMode.error).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        lightMode.errorLight = (0, _tinycolor.default)(lightMode.error)
          .lighten(light)
          .toString();
        lightMode.errorTooLight = (0, _tinycolor.default)(lightMode.error)
          .lighten(tooLight)
          .toString();
        lightMode.errorDark = (0, _tinycolor.default)(lightMode.error)
          .darken(dark)
          .toString();
        lightMode.errorTooDark = (0, _tinycolor.default)(lightMode.error)
          .darken(tooDark)
          .toString();
        lightMode.glassError = (0, _tinycolor.default)(lightMode.error)
          .setAlpha(glass)
          .toString();
        lightMode.glassError = (0, _tinycolor.default)(lightMode.error)
          .setAlpha(darkGlass)
          .toString();
      }
      if (lightMode.success) {
        lightMode.successText = (0, _tinycolor.default)(
          lightMode.success
        ).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        lightMode.successLight = (0, _tinycolor.default)(lightMode.success)
          .lighten(light)
          .toString();
        lightMode.successTooLight = (0, _tinycolor.default)(lightMode.success)
          .lighten(tooLight)
          .toString();
        lightMode.successDark = (0, _tinycolor.default)(lightMode.success)
          .darken(dark)
          .toString();
        lightMode.successTooDark = (0, _tinycolor.default)(lightMode.success)
          .darken(tooDark)
          .toString();
        lightMode.glassSuccess = (0, _tinycolor.default)(lightMode.success)
          .setAlpha(glass)
          .toString();
        lightMode.darkGlassSuccess = (0, _tinycolor.default)(lightMode.success)
          .setAlpha(darkGlass)
          .toString();
      }
    }
    if (darkMode) {
      if (darkMode.primary) {
        darkMode.primaryLight = (0, _tinycolor.default)(darkMode.primary)
          .lighten(light)
          .toString();
        darkMode.primaryTooLight = (0, _tinycolor.default)(darkMode.primary)
          .lighten(tooLight)
          .toString();
        darkMode.primaryDark = (0, _tinycolor.default)(darkMode.primary)
          .darken(dark)
          .toString();
        darkMode.primaryTooDark = (0, _tinycolor.default)(darkMode.primary)
          .darken(tooDark)
          .toString();
        darkMode.primaryText = (0, _tinycolor.default)(
          darkMode.primary
        ).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        darkMode.primaryTextOpposite = (0, _tinycolor.default)(
          darkMode.primary
        ).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        darkMode.glassPrimary = (0, _tinycolor.default)(darkMode.primary)
          .setAlpha(dm_glass)
          .toString();
        darkMode.darkGlassPrimary = (0, _tinycolor.default)(darkMode.primary)
          .setAlpha(dm_darkGlass)
          .toString();
      }
      if (darkMode.secondary) {
        darkMode.secondaryLight = (0, _tinycolor.default)(darkMode.secondary)
          .lighten(light)
          .toString();
        darkMode.secondaryTooLight = (0, _tinycolor.default)(darkMode.secondary)
          .lighten(tooLight)
          .toString();
        darkMode.secondaryDark = (0, _tinycolor.default)(darkMode.secondary)
          .darken(dark)
          .toString();
        darkMode.secondaryTooDark = (0, _tinycolor.default)(darkMode.secondary)
          .darken(tooDark)
          .toString();
        darkMode.secondaryText = (0, _tinycolor.default)(
          darkMode.secondary
        ).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        darkMode.secondaryTextOpposite = (0, _tinycolor.default)(
          darkMode.secondary
        ).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        darkMode.glassSecondary = (0, _tinycolor.default)(darkMode.secondary)
          .setAlpha(dm_glass)
          .toString();
        darkMode.darkGlassSecondary = (0, _tinycolor.default)(
          darkMode.secondary
        )
          .setAlpha(dm_darkGlass)
          .toString();
      }
      if (darkMode.neutral) {
        darkMode.neutralLight = (0, _tinycolor.default)(darkMode.neutral)
          .lighten(light)
          .toString();
        darkMode.neutralTooLight = (0, _tinycolor.default)(darkMode.neutral)
          .lighten(tooLight)
          .toString();
        darkMode.neutralDark = (0, _tinycolor.default)(darkMode.neutral)
          .darken(dark)
          .toString();
        darkMode.neutralTooDark = (0, _tinycolor.default)(darkMode.neutral)
          .darken(tooDark)
          .toString();
        darkMode.neutralText = (0, _tinycolor.default)(
          darkMode.neutral
        ).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        darkMode.neutralTextOpposite = (0, _tinycolor.default)(
          darkMode.neutral
        ).isLight()
          ? 'var(--textPrimary)'
          : 'var(--textOpposite)';
        darkMode.glassNeutral = (0, _tinycolor.default)(darkMode.neutral)
          .setAlpha(dm_glass)
          .toString();
        darkMode.darkGlassNeutral = (0, _tinycolor.default)(darkMode.neutral)
          .setAlpha(dm_darkGlass)
          .toString();
      }
      if (darkMode.error) {
        darkMode.errorText = (0, _tinycolor.default)(darkMode.error).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        darkMode.errorLight = (0, _tinycolor.default)(darkMode.error)
          .lighten(light)
          .toString();
        darkMode.errorTooLight = (0, _tinycolor.default)(darkMode.error)
          .lighten(tooLight)
          .toString();
        darkMode.errorDark = (0, _tinycolor.default)(darkMode.error)
          .darken(dark)
          .toString();
        darkMode.errorTooDark = (0, _tinycolor.default)(darkMode.error)
          .darken(tooDark)
          .toString();
        darkMode.glassError = (0, _tinycolor.default)(darkMode.error)
          .setAlpha(dm_glass)
          .toString();
        darkMode.darkGlassError = (0, _tinycolor.default)(darkMode.error)
          .setAlpha(dm_darkGlass)
          .toString();
      }
      if (darkMode.success) {
        darkMode.successText = (0, _tinycolor.default)(
          darkMode.success
        ).isLight()
          ? 'var(--textOpposite)'
          : 'var(--textPrimary)';
        darkMode.successLight = (0, _tinycolor.default)(darkMode.success)
          .lighten(light)
          .toString();
        darkMode.successTooLight = (0, _tinycolor.default)(darkMode.success)
          .lighten(tooLight)
          .toString();
        darkMode.successDark = (0, _tinycolor.default)(darkMode.success)
          .darken(dark)
          .toString();
        darkMode.successTooDark = (0, _tinycolor.default)(darkMode.success)
          .darken(tooDark)
          .toString();
        darkMode.glassSuccess = (0, _tinycolor.default)(darkMode.success)
          .setAlpha(dm_glass)
          .toString();
        darkMode.darkGlassSuccess = (0, _tinycolor.default)(darkMode.success)
          .setAlpha(dm_darkGlass)
          .toString();
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
        }
      }
      for (let key in darkMode) {
        document.body.style.setProperty(`--${key}`, darkMode[key]);
      }
    }
  }, [theme]);
  return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ThemeContext.Provider, {
    value: {
      theme: theme,
      changeTheme: changeTheme,
      colors: colors,
    },
    children: children,
  });
};
module.exports = {
  ThemeProvider,
  ThemeContext,
};
