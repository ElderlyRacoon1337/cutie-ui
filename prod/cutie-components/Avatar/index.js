'use strict';

var _react = require('react');
var _styled = _interopRequireDefault(require('@emotion/styled'));
var _ThemeProvider = require('../../cutie-utils/ThemeProvider');
var _jsxRuntime = require('@emotion/react/jsx-runtime');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
/** @jsxImportSource @emotion/react */

const StyledAvatar = _styled.default.div`
  width: ${(props) => props._width};
  aspect-ratio: 1 / 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.variant == 'square' && `border-radius: 0;`}
  ${(props) => props.variant == 'circular' && `border-radius: 50%;`}
${(props) => props.variant == 'rounded' && `border-radius: 20%;`}

background-image: url(${(props) => props._src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${(props) => props.styleOverrides};
`;
const Avatar = ({
  variant = 'circular',
  className,
  src,
  sx,
  onClick,
  other,
  width = '40px',
}) => {
  let theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  const styleOverrides = theme.styleOverrides.avatar;
  return (0, _jsxRuntime.jsx)(StyledAvatar, {
    styleOverrides: styleOverrides,
    _width: width,
    variant: variant,
    className: className,
    css: sx,
    _src: src,
    onClick: onClick,
    ...other,
  });
};
module.exports = {
  Avatar,
};
