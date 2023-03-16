const React = require('react');
const { clsx } = require('clsx');
const ListItem = ({
  className,
  children,
  style,
  startIcon,
  onClick,
  active,
  endIcon,
}) => {
  return /*#__PURE__*/ React.createElement(
    'li',
    {
      onClick: onClick,
      className: clsx(
        'CuteListItem',
        active && 'CuteListItem-active',
        startIcon && !endIcon && 'CuteListItem-iconStart',
        endIcon && !startIcon && 'CuteListItem-iconEnd',
        startIcon && endIcon && 'CuteListItem-icons',
        className
      ),
      style: style,
    },
    startIcon,
    endIcon,
    children
  );
};
module.exports = {
  ListItem,
};
