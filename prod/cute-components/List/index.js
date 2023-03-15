const React = require('react');

const List = ({ children, className, sx }) => {
  return /*#__PURE__*/ React.createElement(
    'ul',
    {
      className: `${className} list`,
      style: sx,
    },
    children
  );
};

module.exports = {
  List,
};
