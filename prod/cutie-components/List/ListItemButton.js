'use strict';

var _styled = _interopRequireDefault(require('@emotion/styled'));
var _react = require('react');
var _ThemeProvider = require('../../cutie-utils/ThemeProvider');
var _tinycolor = _interopRequireDefault(require('tinycolor2'));
var _variables = require('../../variables');
var _jsxRuntime = require('@emotion/react/jsx-runtime');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
/** @jsxImportSource @emotion/react */

const StyledListItemButton = _styled.default.li`
  &:hover {
    background-color: ${(0, _tinycolor.default)('#000')
      .setAlpha(0.04)
      .toString()};
  }

  &:active {
    background-color: ${(0, _tinycolor.default)('#000')
      .setAlpha(0.06)
      .toString()};
  }

  ${(props) =>
    props._mode == 'dark' &&
    `&:hover {
    background-color: ${(0, _tinycolor.default)('#fff')
      .setAlpha(0.07)
      .toString()};
  }

  &:active {
    background-color: ${(0, _tinycolor.default)('#fff')
      .setAlpha(0.1)
      .toString()};
  }`}

  padding: 8px 15px;
  border-radius: ${(props) => props.variables.baseBorderRadius};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 7px;
  cursor: pointer;
  list-style: none;
  font-family: ${(props) => props.variables.baseFontFamily};
  font-size: ${(props) => props.variables.fontSizeMedium};
  font-weight: 400;

  ${(props) => props.square && `border-radius: 0;`}

  ${(props) =>
    props.startIcon &&
    !props.endIcon &&
    `display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    svg{
      font-size:1.2rem;
    }
    & > svg:first-of-type {
      margin-right: 10px;
    }`}

    ${(props) =>
      props.endIcon &&
      !props.startIcon &&
      `display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      svg{
        font-size:1.2rem;
      }
      div {
        margin-right: 10px;
      }
      & > svg:last-of-type {
        margin-left: auto;
        min-width: 20px;
      }`}

    ${(props) =>
      props.startIcon &&
      props.endIcon &&
      `display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    & > svg:first-of-type {
      margin-right: 10px;
      min-width: 10px;
    }
    svg{
      font-size:1.2rem;
    }
    div {
      margin-right: 10px;
    }
    & > svg:last-of-type {
      min-width: 10px;
      margin-left: auto;
    }`}


    ${(props) =>
      props.active &&
      `background-color: ${(0, _tinycolor.default)(props._color)
        .setAlpha(0.08)
        .toString()};
    color: ${
      !(0, _tinycolor.default)(props._color).isLight()
        ? props._color
        : (0, _tinycolor.default)(props._color).darken(15).toString()
    } !important;
    div {
      color:  ${
        !(0, _tinycolor.default)(props._color).isLight()
          ? props._color
          : (0, _tinycolor.default)(props._color).darken(15).toString()
      } !important;
    }
    &:hover {
      background-color:  ${(0, _tinycolor.default)(props._color)
        .setAlpha(0.12)
        .toString()};
      color:  ${
        !(0, _tinycolor.default)(props._color).isLight()
          ? props._color
          : (0, _tinycolor.default)(props._color).darken(15).toString()
      } !important;
    }`}

    ${(props) =>
      props.activeFilled &&
      `background-color: ${props._color};
    color: ${
      (0, _tinycolor.default)(props._color).isLight()
        ? props.variables.black
        : props.variables.white
    } !important;
    & > * {
      color:  ${
        (0, _tinycolor.default)(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      } !important;
    }
    div {
      color: ${
        (0, _tinycolor.default)(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      } !important;
    }
    &:hover {
      background-color: ${(0, _tinycolor.default)(props._color)
        .darken(5)
        .toString()};
      color: ${
        (0, _tinycolor.default)(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      } !important;
    }`}

    ${(props) =>
      props._mode == 'dark' &&
      `
    ${
      props.active &&
      `color: ${
        (0, _tinycolor.default)(props._color).isLight()
          ? props._color
          : (0, _tinycolor.default)(props._color).lighten(15).toString()
      } !important;
      div {
        color:  ${
          (0, _tinycolor.default)(props._color).isLight()
            ? props._color
            : (0, _tinycolor.default)(props._color).lighten(15).toString()
        } !important;
      }
      & > * {
        color:  ${
          (0, _tinycolor.default)(props._color).isLight()
            ? props._color
            : (0, _tinycolor.default)(props._color).lighten(15).toString()
        } !important;
      }
      &:hover {
        color:  ${
          (0, _tinycolor.default)(props._color).isLight()
            ? props._color
            : (0, _tinycolor.default)(props._color).lighten(15).toString()
        } !important;
      }`
    }

    ${
      props.activeFilled &&
      `background-color: ${props._color};
    & > * {
      color:  ${
        (0, _tinycolor.default)(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      } !important;
    }
    div {
      color:  ${
        (0, _tinycolor.default)(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      } !important;
    }
    &:hover {
      background-color: ${(0, _tinycolor.default)(props._color)
        .darken(5)
        .toString()};
      color: ${
        (0, _tinycolor.default)(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      } !important;
    }`
    }
    `}
    ${(props) => props.styleOverrides};
`;
const ListItemButton = ({
  className,
  children,
  sx,
  startIcon,
  onClick,
  active,
  endIcon,
  activeFilled,
  other,
  square,
  color = 'primary',
}) => {
  const theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  const mode = theme.theme;
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = _variables.initialVariables;
  }
  const styleOverrides = theme.styleOverrides.listItemButton;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return (0, _jsxRuntime.jsx)(StyledListItemButton, {
    styleOverrides: styleOverrides,
    onClick: onClick,
    className: className,
    variables: variables,
    _mode: mode,
    startIcon: startIcon,
    active: active,
    activeFilled: activeFilled,
    _color: color,
    square: square,
    endIcon: endIcon,
    ...other,
    css: sx,
    children:
      startIcon || endIcon
        ? (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
              startIcon,
              (0, _jsxRuntime.jsx)('div', {
                children: children,
              }),
              endIcon,
            ],
          })
        : children,
  });
};
module.exports = {
  ListItemButton,
};
