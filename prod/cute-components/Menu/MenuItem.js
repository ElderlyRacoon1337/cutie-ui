const React = require('react');

const MenuItem = ({ children, handleClose, className, sx, onClick }) => {
  return /*#__PURE__*/ React.createElement(
    'li',
    {
      onClick: () => {
        handleClose();
        onClick();
      },
      className: `${className} menuItem`,
      style: sx,
    },
    children
  );
};

module.exports = {
  MenuItem,
};
