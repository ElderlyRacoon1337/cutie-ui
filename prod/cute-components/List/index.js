const React = require('react');
const { clsx } = require('clsx');
const List = ({ children, className, style }) => {
  return /*#__PURE__*/ React.createElement(
    'ul',
    {
      className: clsx('list', className),
      style: style,
    },
    children
  );
};
module.exports = {
  List,
};
