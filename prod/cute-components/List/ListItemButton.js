const React = require('react');
const { clsx } = require('clsx');
const ListItemButton = ({
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
        'listItemButton',
        active && 'listItemActive',
        startIcon && !endIcon && 'listItemIconStart',
        endIcon && !startIcon && 'listItemIconEnd',
        startIcon && endIcon && 'listItemIcons',
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
  ListItemButton,
};
