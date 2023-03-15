const React = require('react');
const { clsx } = require('clsx');

const Button = ({
  variant,
  children,
  className,
  onClick,
  color,
  size,
  startIcon,
  sx,
}) => {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: clsx(color, size),
    },
    /*#__PURE__*/ React.createElement(
      'button',
      {
        onClick: onClick,
        className: clsx(
          className,
          variant == 'outlined'
            ? 'buttonOutlined'
            : variant == 'contained'
            ? 'buttonContained'
            : 'buttonText',
          color
        ),
        style: sx,
      },
      children
    )
  );
};

module.exports = {
  Button,
};
