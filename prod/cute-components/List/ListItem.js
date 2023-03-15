const React = require('react');

const ListItem = ({ className, children, sx, startIcon, onClick }) => {
  return /*#__PURE__*/ React.createElement(
    'li',
    {
      onClick: onClick,
      className: `${className} listItem ${startIcon ? 'listItemIcon' : ''}`,
      style: sx,
    },
    startIcon,
    children
  );
};

module.exports = {
  ListItem,
};
