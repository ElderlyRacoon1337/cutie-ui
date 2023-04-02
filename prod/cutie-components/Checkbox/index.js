'use strict';

var _styled = _interopRequireDefault(require('@emotion/styled'));
var _react = require('react');
var _tinycolor = _interopRequireDefault(require('tinycolor2'));
var _ThemeProvider = require('../../cutie-utils/ThemeProvider');
var _Icon = require('../Icon');
var _variables = require('../../variables');
var _jsxRuntime = require('@emotion/react/jsx-runtime');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
/** @jsxImportSource @emotion/react */

const StyledCheckbox = _styled.default.div`
  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  cursor: pointer;

  label {
    margin-left: 0.5rem;
    font-family: ${(props) => props.variables.baseFontFamily};
    font-size: ${(props) => props.variables.fontSizeMedium};

    ${(props) =>
      props.size == 'small' && `font-size: ${props.variables.fontSizeSmall};`}
    ${(props) =>
      props.size == 'large' && `font-size: ${props.variables.fontSizeLarge};`}
  }

  display: flex;
  input[type='checkbox'] {
    appearance: none;
    margin: 0;
    color: currentColor;
    width: ${(props) => props.variables.size};
    height: ${(props) => props.variables.size};
    border: 1.5px solid ${(props) => props.variables.divider};
    border-radius: 0.15em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
  }

  input[type='checkbox']:checked {
    border: 1.5px solid ${(props) => props._color};
    background-color: ${(props) => props._color};
  }

  ${(props) =>
    props.size == 'medium' &&
    `input[type='checkbox'] {width:1rem; height:1rem;}
    `}

  ${(props) =>
    props.size == 'small' &&
    `input[type='checkbox'] {width:0.9rem; height:0.9rem;}`}

      ${(props) =>
        props.size == 'large' &&
        `input[type='checkbox'] {width:1.2rem; height:1.2rem;}`}

    ${(props) =>
      props._width &&
      `input[type='checkbox'] {width: ${props._width}; height: ${props._width};}`}
  
    
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    color: ${(props) =>
      (0, _tinycolor.default)(props._color).isLight() ? 'black' : 'white'};
  }

  ${(props) =>
    props._disabled &&
    `cursor: not-allowed;
    input[type='checkbox']{
    border-color: ${props.variables.disabled};
      cursor: not-allowed;
    }
    input[type='checkbox']:checked{
      border-color: ${props.variables.disabled};
      background-color: ${props.variables.disabled};
      cursor: not-allowed;
      }
  `}

  ${(props) => props.styleOverrides};
`;
const Checkbox = ({
  size = 'medium',
  width,
  color = 'primary',
  sx,
  className,
  other,
  checked = false,
  disabled,
  onChange,
  onClick,
  label,
}) => {
  const theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = _variables.initialVariables;
  }
  const ref = (0, _react.useRef)(null);
  const styleOverrides = theme.styleOverrides.checkbox;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return (0, _jsxRuntime.jsxs)(StyledCheckbox, {
    styleOverrides: styleOverrides,
    onClick: (e) => ref.current.click(),
    _color: color,
    variables: variables,
    size: size,
    _width: width,
    _disabled: disabled,
    css: sx,
    ...other,
    className: className,
    children: [
      (0, _jsxRuntime.jsxs)('div', {
        onClick: (e) => ref.current.click(),
        children: [
          (0, _jsxRuntime.jsx)('input', {
            disabled: disabled,
            width: width,
            ref: ref,
            checked: checked,
            onClick: onClick,
            onChange: onChange,
            type: 'checkbox',
          }),
          checked &&
            (0, _jsxRuntime.jsx)(_Icon.Icon, {
              onClick: (e) => ref.current.click(),
              fontSize: width
                ? width
                : size == 'small'
                ? '0.9rem'
                : size == 'medium'
                ? '1rem'
                : '1.2rem',
              children: (0, _jsxRuntime.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                id: 'check',
                children: [
                  (0, _jsxRuntime.jsx)('rect', {
                    width: '256',
                    height: '256',
                    fill: 'none',
                  }),
                  (0, _jsxRuntime.jsx)('polyline', {
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '24',
                    points: '216 72.005 104 184 48 128.005',
                  }),
                ],
              }),
            }),
        ],
      }),
      label &&
        (0, _jsxRuntime.jsx)('label', {
          children: label,
        }),
    ],
  });
};
module.exports = {
  Checkbox,
};
