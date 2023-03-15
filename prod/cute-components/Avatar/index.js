const React = require('react');
const { clsx } = require('clsx');

const Avatar = ({ variant = 'circular', className, src, style, onClick }) => {
  return /*#__PURE__*/ React.createElement('div', {
    onClick: onClick,
    className: clsx(
      'avatar',
      variant == 'square' && 'avatarSquare',
      variant == 'rounded' && 'avatarRounded',
      variant == 'circular' && 'avatarCircular',
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
