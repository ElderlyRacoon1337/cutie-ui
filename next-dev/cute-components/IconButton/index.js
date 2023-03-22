var _jsxRuntime = require('react/jsx-runtime');
const { clsx } = require('clsx');
const IconButton = ({
  variant = 'text',
  icon,
  className,
  onClick,
  size = 'medium',
  color = 'primary',
  style,
  disabled,
  type = 'button',
  children,
  other,
}) => {
  return /*#__PURE__*/ (0, _jsxRuntime.jsxs)('button', {
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: clsx(
      'CuteIconButton',
      disabled && `CuteIconButton-${variant}-disabled`,
      size && `CuteIconButton-${size}`,
      `CuteIconButton-${variant}`,
      color && variant && `CuteIconButton-${color}-${variant}`,
      className
    ),
    ...other,
    style: style,
    children: [icon, children],
  });
};
module.exports = {
  IconButton,
};
