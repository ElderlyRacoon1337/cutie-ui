const React = require('react');

const IconButton = ({ variant, svg, className, onClick, size, color, sx }) => {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: `${color} ${size}`,
    },
    /*#__PURE__*/ React.createElement(
      'button',
      {
        onClick: onClick,
        className: `${className} ${
          variant == 'outlined'
            ? 'iconButtonOutlined'
            : variant == 'contained'
            ? 'iconButtonContained'
            : 'iconButtonText'
        }
        `,
        style: sx,
      },
      svg
    )
  );
};

module.exports = {
  IconButton,
};
