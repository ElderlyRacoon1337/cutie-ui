var _jsxRuntime = require('react/jsx-runtime');
const { clsx } = require('clsx');
const ListItemButton = ({
  className,
  children,
  style,
  startIcon,
  onClick,
  active,
  endIcon,
  activeFilled,
  other,
  square,
}) => {
  return /*#__PURE__*/ (0, _jsxRuntime.jsxs)('li', {
    onClick: onClick,
    className: clsx(
      'CuteListItem',
      'CuteListItemButton',
      active && 'CuteListItem-active',
      activeFilled && 'CuteListItem-activeFilled',
      startIcon && !endIcon && 'CuteListItem-iconStart',
      endIcon && !startIcon && 'CuteListItem-iconEnd',
      startIcon && endIcon && 'CuteListItem-icons',
      square && 'CuteListItem-square',
      className
    ),
    ...other,
    style: style,
    children: [
      startIcon,
      /*#__PURE__*/ (0, _jsxRuntime.jsx)('div', {
        className: 'CuteListItemChildren',
        children: children,
      }),
      endIcon,
    ],
  });
};
module.exports = {
  ListItemButton,
};
