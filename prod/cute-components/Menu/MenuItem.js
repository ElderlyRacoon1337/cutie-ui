const React = require('react');
const { clsx } = require('clsx');
const MenuItem = ({ children, onClose, className, style, onClick }) => {
  return /*#__PURE__*/ React.createElement(
    'li',
    {
      onClick: onClick
        ? (e) => {
            onClick(e);
            onClose(e);
          }
        : onClose,
      className: clsx('menuItem', className),
      style: style,
    },
    children
  );
};
module.exports = {
  MenuItem,
};
