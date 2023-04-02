'use strict';

var _styled = _interopRequireDefault(require('@emotion/styled'));
var _react = require('react');
var _tinycolor = _interopRequireDefault(require('tinycolor2'));
var _ThemeProvider = require('../../cutie-utils/ThemeProvider');
var _variables = require('../../variables');
var _jsxRuntime = require('@emotion/react/jsx-runtime');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
/** @jsxImportSource @emotion/react */

const StyledMenuItem = _styled.default.li`
  padding: 9px 15px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  color: ${(props) => props.variables.textPrimary};
  font-size: ${(props) => props.variables.fontSizeSmall};
  ${(props) =>
    props.divider &&
    `
    border-bottom: 1px solid ${props.variables.divider};`}

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
    `
    &:hover {
      background-color: ${(0, _tinycolor.default)('#fff')
        .setAlpha(0.07)
        .toString()};
    }

    &:active {
      background-color: ${(0, _tinycolor.default)('#fff')
        .setAlpha(0.1)
        .toString()};
    }
    `}

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
      color: ${props.variables.textPrimary};
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
    
      & > div:first-of-type {
        margin-right: 10px;
      }
      svg{
        font-size:1.2rem;
      }
      & > svg:last-of-type {
        margin-left: auto;
        color: ${props.variables.textPrimary};
        min-width: 10px;
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
        color: ${props.variables.textPrimary};
        min-width: 10px;
      }
      svg{
        font-size:1.2rem;
      }
      div {
        margin-right: 10px;
      }
    
      & > svg:last-of-type {
        color: ${props.variables.textPrimary};
        min-width: 10px;
        margin-left: auto;
      }`}

      ${(props) => props.styleOverrides};
`;
const MenuItem = ({
  children,
  onClose,
  className,
  sx,
  onClick,
  startIcon,
  endIcon,
  divider,
  other,
}) => {
  const theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = _variables.initialVariables;
  }
  const mode = theme.theme;
  const styleOverrides = theme.styleOverrides.menuItem;
  return (0, _jsxRuntime.jsx)(StyledMenuItem, {
    styleOverrides: styleOverrides,
    variables: variables,
    _mode: mode,
    startIcon: startIcon,
    endIcon: endIcon,
    divider: divider,
    onClick: onClick
      ? (e) => {
          onClick(e);
          onClose && onClose(e);
        }
      : onClose,
    className: className,
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
  MenuItem,
};
