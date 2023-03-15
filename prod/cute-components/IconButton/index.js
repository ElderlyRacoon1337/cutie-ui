const React = require('react');
const { clsx } = require('clsx');
const IconButton = ({
  variant,
  svg,
  className,
  onClick,
  size,
  color,
  style,
}) => {
  return /*#__PURE__*/ React.createElement(
    'button',
    {
      onClick: onClick,
      className: clsx(
        size && `${size}IconButton`,
        color && `${color}IconButton`,
        color && variant && `${color}IconButton${variant}`,
        variant == 'outlined'
          ? 'iconButtonOutlined'
          : variant == 'contained'
          ? 'iconButtonContained'
          : 'iconButtonText',
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
