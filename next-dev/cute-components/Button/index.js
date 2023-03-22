var _jsxRuntime = require('react/jsx-runtime');
const { clsx } = require('clsx');
const Button = ({
  variant = 'text',
  children,
  className,
  onClick,
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  style,
  disabled,
  type = 'button',
  square,
  other,
}) => {
  return /*#__PURE__*/ (0, _jsxRuntime.jsxs)('button', {
    disabled: disabled,
    type: type,
    className: clsx(
      'CuteButton',
      disabled && `CuteButton-${variant}-disabled`,
      size && `CuteButton-${size}`,
      startIcon && !endIcon && 'CuteButton-iconStart',
      endIcon && !startIcon && 'CuteButton-iconEnd',
      startIcon && endIcon && 'CuteButton-icons',
      `CuteButton-${variant}`,
      square && 'CuteButton-square',
      color && variant && `CuteButton-${color}-${variant}`,
      className
    ),
    onClick: onClick,
    ...other,
    style: style,
    children: [
      startIcon,
      /*#__PURE__*/ (0, _jsxRuntime.jsx)('div', {
        className: 'CuteButtonChildren',
        children: children,
      }),
      endIcon,
    ],
  });
};
module.exports = {
  Button,
};
