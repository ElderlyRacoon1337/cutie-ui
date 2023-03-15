const React = require('react');

const Icon = ({ svg, className, size, color, sx, onClick }) => {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: `${color} ${size}`,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        onClick: onClick,
        className: `${className} ${'icon'}
        `,
        style: sx,
      },
      svg
    )
  );
};

module.exports = {
  Icon,
};
