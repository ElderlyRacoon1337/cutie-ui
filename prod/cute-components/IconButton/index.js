const React = require('react');
const { clsx } = require('clsx');
const IconButton = ({
  variant = 'text',
  svg,
  className,
  onClick,
  size = 'medium',
  color = 'primary',
  style,
  disabled,
  type = 'button',
}) => {
  return /*#__PURE__*/ React.createElement(
    'button',
    {
      type: type,
      disabled: disabled,
      onClick: onClick,
      className: clsx(
        'CuteIconButton',
        disabled && 'CuteIconButton-disabled',
        size && `CuteIconButton-${size}`,
        color && variant && `CuteIconButton-${color}-${variant}`,
        className
      ),
      style: style,
    },
    svg
  );
};
module.exports = {
  IconButton,
};
