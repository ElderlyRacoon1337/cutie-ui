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

const StyledIconButton = _styled.default.button`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 50%;
  -webkit-transition: 0.1s all ease-in-out;
  -o-transition: 0.1s all ease-in-out;
  transition: 0.1s all ease-in-out;
  cursor: pointer;
  ${(props) =>
    props.size == 'small' &&
    `padding: 5px;
  & > *:first-of-type {
    font-size: 17px;
  }`}
  ${(props) =>
    props.size == 'medium' &&
    `padding: 5px;
    & > *:first-of-type {
      font-size: 20px;
    }`}
  ${(props) =>
    props.size == 'large' &&
    `padding: 5px;
    & > *:first-of-type {
      font-size: 25px;
    }`}
    ${(props) =>
      props.disabled &&
      props.variant == 'text' &&
      `
    background-color: transparent !important;
    border-color: transparent !important;
    color: ${props.variables.disabled} !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    cursor: not-allowed;
    `}

    ${(props) =>
      props.disabled &&
      props.variant == 'outlined' &&
      `background-color: transparent !important;
    border-color: var(--disabled) !important;
    color: var(--disabled) !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    cursor: not-allowed;
      `}

      ${(props) =>
        props.disabled &&
        props.variant == 'contained' &&
        `background-color: var(--glass) !important;
    border-color: transparent !important;
    color: var(--disabled) !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    cursor: not-allowed;
        `}
    
    ${(props) =>
      props.variant == 'contained' &&
      `border: 1px solid ${props._color};
  background-color: ${props._color};
  color: ${
    (0, _tinycolor.default)(props._color).isLight()
      ? props.variables.black
      : props.variables.white
  };
  &:hover {
    background-color: ${(0, _tinycolor.default)(props._color).darken(5)};
    border-color: ${(0, _tinycolor.default)(props._color).darken(5)};
  }
  &:active {
    border-color:${(0, _tinycolor.default)(props._color).darken(10)};
    background-color:${(0, _tinycolor.default)(props._color).darken(10)};
  }
`}
    ${(props) =>
      props.variant == 'outlined' &&
      `color: ${props.variables.textPrimary};
  border: 1px solid  ${props.variables.textPrimary};
  background-color: transparent;
  &:hover {
    background-color: transparent;
    color: ${props._color};
    border: 1px solid  ${props._color};
    -webkit-box-shadow: 0px 0px 0px 3px ${(0, _tinycolor.default)(
      props._color
    ).setAlpha(0.08)};
    box-shadow: 0px 0px 0px 3px ${(0, _tinycolor.default)(
      props._color
    ).setAlpha(0.08)};
  }
  &:active {
    color: ${(0, _tinycolor.default)(props._color).darken(5)};
    border: 1px solid  ${(0, _tinycolor.default)(props._color).darken(5)};
    -webkit-box-shadow: 0px 0px 0px 3px ${(0, _tinycolor.default)(
      props._color
    ).setAlpha(0.12)};
    box-shadow: 0px 0px 0px 3px  ${(0, _tinycolor.default)(
      props._color
    ).setAlpha(0.12)};
  }`}

  ${(props) =>
    props.variant == 'text' &&
    `background-color: transparent;
  color: ${props._color};
  border: 1px solid transparent;

  &:hover {
    background-color: ${(0, _tinycolor.default)(props._color).setAlpha(0.08)};
    color: ${props._color};
  }

  &:active {
    background-color:  ${(0, _tinycolor.default)(props._color).setAlpha(0.12)};
  }`}

  ${(props) => props.styleOverrides};
`;
const IconButton = ({
  variant = 'text',
  className,
  onClick,
  size = 'medium',
  color = 'primary',
  sx,
  disabled,
  type,
  children,
  other,
}) => {
  const theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = _variables.initialVariables;
  }
  const styleOverrides = theme.styleOverrides.iconButton;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return (0, _jsxRuntime.jsx)(StyledIconButton, {
    styleOverrides: styleOverrides,
    variables: variables,
    variant: variant,
    _color: color,
    size: size,
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: className,
    ...other,
    css: sx,
    children: children,
  });
};
module.exports = {
  IconButton,
};
