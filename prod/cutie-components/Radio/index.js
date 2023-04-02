'use strict';

var _react = require('react');
var _styled = _interopRequireDefault(require('@emotion/styled'));
var _ThemeProvider = require('../../cutie-utils/ThemeProvider');
var _variables = require('../../variables');
var _jsxRuntime = require('@emotion/react/jsx-runtime');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
/** @jsxImportSource @emotion/react */

const StyledRadio = _styled.default.div`
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    opacity: 0;
    appearance: none;
  }

  span {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: 1px solid ${(props) => props.variables.divider};
    border-radius: 50%;
  }

  label {
    margin-left: 0.5rem;
    font-family: ${(props) => props.variables.baseFontFamily};
    font-size: ${(props) => props.variables.fontSizeMedium};

    ${(props) =>
      props.size == 'small' && `font-size: ${props.variables.fontSizeSmall};`}
    ${(props) =>
      props.size == 'large' && `font-size: ${props.variables.fontSizeLarge};`}
  }

  ${(props) =>
    props.size == 'medium' &&
    `span {width:1.12rem; height:1.12rem;}
    `}

  ${(props) => props.size == 'small' && `span {width:1rem; height:1rem;}`}

  ${(props) => props.size == 'large' && `span {width:1.3rem; height:1.3rem;}`}

    ${(props) =>
      props._width && `span {width: ${props._width}; height: ${props._width};}`}
  

  ${(props) =>
    props._checked &&
    `span{
      border-color: ${props._color};
    }
    span::after {
    background: ${props._color};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 70%;
    height: 70%;
    border-radius: 50%;
  }
  `}

  ${(props) =>
    props._disabled &&
    `span {
    border-color: ${props.variables.disabled};
    cursor: not-allowed;
  }
  span::after {
    background: ${props.variables.disabled};
    cursor: not-allowed;
  }
  `}

  ${(props) => props.styleOverrides};
`;
const Radio = ({
  onChange,
  currentValue,
  value,
  color = 'primary',
  size = 'medium',
  disabled,
  width,
  label,
  className,
  other,
  sx,
}) => {
  const inputRef = (0, _react.useRef)(null);
  const theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = _variables.initialVariables;
  }
  const styleOverrides = theme.styleOverrides.radio;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return (0, _jsxRuntime.jsxs)(StyledRadio, {
    styleOverrides: styleOverrides,
    onClick: (e) => inputRef.current.click(),
    variables: variables,
    _width: width,
    _disabled: disabled,
    size: size,
    _checked: value == currentValue,
    _color: color,
    css: sx,
    className: className,
    ...other,
    children: [
      (0, _jsxRuntime.jsx)('span', {}),
      (0, _jsxRuntime.jsx)('input', {
        disabled: disabled,
        name: 'radio',
        value: value,
        checked: value == currentValue,
        ref: inputRef,
        onChange: onChange,
        type: 'radio',
      }),
      (0, _jsxRuntime.jsx)('label', {
        children: label,
      }),
    ],
  });
};
module.exports = {
  Radio,
};
