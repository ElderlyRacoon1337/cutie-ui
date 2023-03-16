const React = require('react');
const { clsx } = require('clsx');
const Avatar = ({ variant = 'circular', className, src, style, onClick }) => {
  return /*#__PURE__*/ React.createElement('div', {
    onClick: onClick,
    className: clsx(
      'CuteAvatar',
      variant == 'square' && 'CuteAvatar-square',
      variant == 'rounded' && 'CuteAvatar-rounded',
      variant == 'circular' && 'CuteAvatar-circular',
      className
    ),
    style: {
      ...style,
      backgroundImage: 'url(' + src + ')',
    },
  });
};
module.exports = {
  Avatar,
};
