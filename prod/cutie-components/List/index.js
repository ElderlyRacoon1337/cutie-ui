'use strict';

var _styled = _interopRequireDefault(require('@emotion/styled'));
var _react = require('react');
var _ThemeProvider = require('../../cutie-utils/ThemeProvider');
var _jsxRuntime = require('@emotion/react/jsx-runtime');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
/** @jsxImportSource @emotion/react */

const StyledList = _styled.default.ul`
  list-style: 'none';
  margin: 0;
  padding: 0;

  ${(props) =>
    props.square &&
    `li {
      border-radius: 0;
    }`}

  ${(props) => props.styleOverrides};
`;
const List = ({ children, className, other, square, sx }) => {
  let theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  const styleOverrides = theme.styleOverrides.list;
  return (0, _jsxRuntime.jsx)(StyledList, {
    styleOverrides: styleOverrides,
    square: square,
    className: className,
    ...other,
    css: sx,
    children: children,
  });
};
module.exports = {
  List,
};
