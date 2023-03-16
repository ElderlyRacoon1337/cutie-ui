const React = require('react');
const { clsx } = require('clsx');
const Icon = ({
  svg,
  className,
  size = 'medium',
  color = 'primary',
  style,
  onClick,
}) => {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      onClick: onClick,
      className: clsx(
        'CuteIcon',
        size && `CuteIcon-${size}`,
        color && `CuteIcon-${color}`,
        className
      ),
      style: style,
    },
    svg
  );
};
module.exports = {
  Icon,
};
