'use strict';

var _styled = _interopRequireDefault(require('@emotion/styled'));
var _react = require('react');
var _ThemeProvider = require('../../cutie-utils/ThemeProvider');
var _variables = require('../../variables');
var _jsxRuntime = require('@emotion/react/jsx-runtime');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
/** @jsxImportSource @emotion/react */

const StyledLink = _styled.default.a`
  color: ${(props) => props._color};
  cursor: pointer;
  font-family: ${(props) => props.variables.baseFontFamily};
  font-size: ${(props) => props.variables.fontSizeMedium};
  &:hover {
    text-decoration: underline;
  }

  ${(props) => props.underlined && `text-decoration: underline;`}
  ${(props) => props.styleOverrides};
`;
const Link = ({
  children,
  href,
  className,
  sx,
  onClick,
  underlined = false,
  other,
  color = 'link',
}) => {
  const theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = _variables.initialVariables;
  }
  const styleOverrides = theme.styleOverrides.link;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return (0, _jsxRuntime.jsx)(StyledLink, {
    styleOverrides: styleOverrides,
    variables: variables,
    _color: color,
    underlined: underlined,
    href: href,
    onClick: onClick,
    className: className,
    css: sx,
    ...other,
    children: children,
  });
};
module.exports = {
  Link,
};
