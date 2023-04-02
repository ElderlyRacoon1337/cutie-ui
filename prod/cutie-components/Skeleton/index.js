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

const StyledSkeleton = _styled.default.div`
  -webkit-animation: toggle 0.5s infinite;
  animation: toggle 0.5s infinite;
  -webkit-animation-duration: 1;
  animation-duration: 1;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;

  width: ${(props) => props._width};
  height: ${(props) => props._height};

  ${(props) => props.variant == 'square' && `border-radius: 0px;`}
  ${(props) =>
    props.variant == 'rounded' &&
    `border-radius: ${props.variables.baseBorderRadius};`}
  ${(props) =>
    props.variant == 'circle' &&
    `border-radius: 50%;
  height: auto !important;
  aspect-ratio: 1;
  `}

  @-webkit-keyframes toggle {
    0% {
      background: ${(props) => props.variables.skeletonDark};
    }
    100% {
      background: ${(props) => props.variables.skeletonLight};
    }
  }

  @keyframes toggle {
    0% {
      background: ${(props) => props.variables.skeletonDark};
    }
    100% {
      background: ${(props) => props.variables.skeletonLight};
    }
  }

  ${(props) => props.styleOverrides};
`;
const Skeleton = ({
  width,
  height,
  variant = 'square',
  className,
  sx,
  other,
}) => {
  const theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = _variables.initialVariables;
  }
  const styleOverrides = theme.styleOverrides.skeleton;
  return (0, _jsxRuntime.jsx)(StyledSkeleton, {
    styleOverrides: styleOverrides,
    variables: variables,
    variant: variant,
    _width: width,
    _height: height,
    className: className,
    css: sx,
    ...other,
  });
};
module.exports = {
  Skeleton,
};
