'use strict';

var _styled = _interopRequireDefault(require('@emotion/styled'));
var _react = require('react');
var _ThemeProvider = require('../../cutie-utils/ThemeProvider');
var _Icon = require('../Icon');
var _variables = require('../../variables');
var _jsxRuntime = require('@emotion/react/jsx-runtime');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
/** @jsxImportSource @emotion/react */

const StyledSelect = _styled.default.select`
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  padding-right: 30px;
  border-color: ${(props) => props.variables.divider};
  color: ${(props) => props.variables.textPrimary};
  font-size: ${(props) => props.variables.fontSizeMedium};
  appearance: none;
  background-color: transparent;
  width: 100%;
  cursor: pointer;
`;
const SelectWrapper = _styled.default.div`
  position: relative;
  svg {
    position: absolute;
    right: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
  }

  ${(props) => props.styleOverrides};
`;
const Select = ({ children, className, sx, onChange, onClick }) => {
  const theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  const selectRef = (0, _react.useRef)(null);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = _variables.initialVariables;
  }
  const styleOverrides = theme.styleOverrides.select;
  return (0, _jsxRuntime.jsxs)(SelectWrapper, {
    styleOverrides: styleOverrides,
    className: className,
    css: sx,
    ref: selectRef,
    children: [
      (0, _jsxRuntime.jsx)(StyledSelect, {
        variables: variables,
        onClick: onClick,
        onChange: onChange,
        children: children,
      }),
      (0, _jsxRuntime.jsx)(_Icon.Icon, {
        fontSize: '1rem',
        onClick: (e) => selectRef.current.click(),
        children: (0, _jsxRuntime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 1.5,
          stroke: 'currentColor',
          className: 'w-6 h-6',
          children: (0, _jsxRuntime.jsx)('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
          }),
        }),
      }),
    ],
  });
};
module.exports = {
  Select,
};
