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

const StyledGradientText = _styled.default.p`
  background: linear-gradient(
    ${(props) => props._rotate}deg,
    ${(props) => props.firstColor},
    ${(props) => props.secondColor}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  font-size: ${(props) => props._fontSize};
  font-weight: ${(props) => props._fontWeight};
  font-family: ${(props) => props.variables.baseFontFamily};

  ${(props) => props.styleOverrides};
`;
const GradientText = ({
  children,
  firstColor,
  secondColor,
  className,
  sx,
  fontSize,
  fontWeight,
  rotate = '90',
  other,
}) => {
  const theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = _variables.initialVariables;
  }
  const styleOverrides = theme.styleOverrides.gradientText;
  if (Object.keys(variables).includes(firstColor)) {
    firstColor = variables[firstColor];
  }
  if (Object.keys(variables).includes(secondColor)) {
    secondColor = variables[secondColor];
  }
  return (0, _jsxRuntime.jsx)(StyledGradientText, {
    styleOverrides: styleOverrides,
    _fontSize: fontSize,
    variables: variables,
    firstColor: firstColor,
    _fontWeight: fontWeight,
    _rotate: rotate,
    secondColor: secondColor,
    className: className,
    css: sx,
    ...other,
    children: children,
  });
};
module.exports = {
  GradientText,
};
