const React = require('react');
const { clsx } = require('clsx');
const Icon = ({ svg, className, size, color, style, onClick }) => {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      onClick: onClick,
      className: clsx(
        'icon',
        size && `${size}Icon`,
        color && `${color}Icon`,
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
