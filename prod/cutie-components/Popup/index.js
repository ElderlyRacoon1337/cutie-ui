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

const StyledPopup = _styled.default.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.38);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 10;

  div {
    position: fixed;
    margin: auto;
    padding: 20px;
    background-color: ${(props) => props.variables.backgroundSecondary};
    border-radius: 10px;
    min-width: 400px;
    min-height: 200px;
    z-index: 10;
    font-family: ${(props) => props.variables.baseFontFamily};
    font-size: ${(props) => props.variables.fontSizeMedium};
  }

  ${(props) => props.styleOverrides};
`;
const Popup = ({ open, onClose, children, sx, className, other }) => {
  const theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = _variables.initialVariables;
  }
  const styleOverrides = theme.styleOverrides.popup;
  const prevent = (ev) => ev.preventDefault();
  (0, _react.useEffect)(() => {
    if (open) {
      document.addEventListener('wheel', prevent, {
        passive: false,
      });
    }
    return () => {
      document.removeEventListener('wheel', prevent);
    };
  }, [open]);
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children:
      open &&
      (0, _jsxRuntime.jsx)(StyledPopup, {
        styleOverrides: styleOverrides,
        variables: variables,
        onClick: onClose,
        children: (0, _jsxRuntime.jsx)('div', {
          className: className,
          onClick: (e) => e.stopPropagation(),
          ...other,
          css: sx,
          children: children,
        }),
      }),
  });
};
module.exports = {
  Popup,
};
