const React = require('react');
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
}) => {
  return /*#__PURE__*/ React.createElement(
    'button',
    {
      disabled: disabled,
      type: type,
      className: clsx(
        'CuteButton',
        size && `CuteButton-${size}`,
        disabled && 'CuteButton-disabled',
        startIcon && !endIcon && 'CuteButton-iconStart',
        endIcon && !startIcon && 'CuteButton-iconEnd',
        startIcon && endIcon && 'CuteButton-icons',
        color && variant && `CuteButton-${color}-${variant}`,
        className
      ),
      onClick: onClick,
      style: style,
    },
    startIcon,
    children,
    endIcon
  );
};
module.exports = {
  Button,
};
