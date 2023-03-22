var _jsxRuntime = require('react/jsx-runtime');
const { clsx } = require('clsx');
const Icon = ({
  icon,
  className,
  size = 'medium',
  color = 'primary',
  style,
  onClick,
  children,
  other,
}) => {
  return /*#__PURE__*/ (0, _jsxRuntime.jsxs)('div', {
    onClick: onClick,
    className: clsx(
      'CuteIcon',
      size && `CuteIcon-${size}`,
      color && `CuteIcon-${color}`,
      className
    ),
    ...other,
    style: style,
    children: [icon, children],
  });
};
module.exports = {
  Icon,
};
