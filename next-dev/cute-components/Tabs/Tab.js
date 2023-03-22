var _jsxRuntime = require('react/jsx-runtime');
const { clsx } = require('clsx');
const Tab = ({ children, className, style, other }) => {
  return /*#__PURE__*/ (0, _jsxRuntime.jsx)('div', {
    className: clsx('CuteTabPanel', className),
    style: style,
    ...other,
    children: children,
  });
};
module.exports = {
  Tab,
};
