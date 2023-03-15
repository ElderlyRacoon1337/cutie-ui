const React = require('react');

const ListItemButton = ({ className, children, sx, startIcon, onClick }) => {
  return /*#__PURE__*/ React.createElement(
    'li',
    {
      onClick: onClick,
      className: `${className} listItemButton ${
        startIcon ? 'listItemIcon' : ''
      }`,
      style: sx,
    },
    startIcon,
    children
  );
};

module.exports = {
  ListItemButton,
};
