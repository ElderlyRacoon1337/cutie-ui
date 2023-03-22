var _jsxRuntime = require('react/jsx-runtime');
const { clsx } = require('clsx');
const MenuItem = ({
  children,
  onClose,
  className,
  style,
  onClick,
  startIcon,
  endIcon,
  divider,
  other,
}) => {
  return /*#__PURE__*/ (0, _jsxRuntime.jsxs)('li', {
    onClick: onClick
      ? (e) => {
          onClick(e);
          onClose && onClose(e);
        }
      : onClose,
    className: clsx(
      'CuteMenuItem',
      startIcon && !endIcon && 'CuteMenuItem-iconStart',
      endIcon && !startIcon && 'CuteMenuItem-iconEnd',
      startIcon && endIcon && 'CuteMenuItem-icons',
      divider && 'CuteMenuItem-divider',
      className
    ),
    ...other,
    style: style,
    children: [
      startIcon,
      /*#__PURE__*/ (0, _jsxRuntime.jsx)('div', {
        className: 'CuteMenuItemChildren',
        children: children,
      }),
      endIcon,
    ],
  });
};
module.exports = {
  MenuItem,
};
