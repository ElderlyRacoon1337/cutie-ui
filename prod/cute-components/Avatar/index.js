const React = require('react');

const Avatar = ({ variant, className, src, sx, onClick }) => {
  return /*#__PURE__*/ React.createElement('div', {
    onClick: onClick,
    className: `avatar ${className} ${
      variant == 'square' ? 'avatar avatarSquare' : 'avatar'
    }`,
    style: {
      ...sx,
      backgroundImage: 'url(' + src + ')',
    },
  });
};

module.exports = {
  Avatar,
};
