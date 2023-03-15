const React = require('react');
const { clsx } = require('clsx');
const Button = ({
  variant,
  children,
  className,
  onClick,
  color,
  size,
  startIcon,
  endIcon,
  style,
}) => {
  return /*#__PURE__*/ React.createElement(
    'button',
    {
      className: clsx(
        size && `${size}Button`,
        color && `${color}Button`,
        variant == 'outlined'
          ? 'buttonOutlined'
          : variant == 'contained'
          ? 'buttonContained'
          : 'buttonText',
        startIcon && !endIcon && 'buttonIconStart',
        endIcon && !startIcon && 'buttonIconEnd',
        startIcon && endIcon && 'buttonIcons',
        color && variant && `${color}Button${variant}`,
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
