var _jsxRuntime = require('react/jsx-runtime');
const { clsx } = require('clsx');
const List = ({ children, className, style, other, square }) => {
  return /*#__PURE__*/ (0, _jsxRuntime.jsx)('ul', {
    className: clsx('CuteList', square && 'CuteList-square', className),
    ...other,
    style: style,
    children: children,
  });
};
module.exports = {
  List,
};
