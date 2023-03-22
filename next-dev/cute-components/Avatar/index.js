var _jsxRuntime = require('react/jsx-runtime');
const { clsx } = require('clsx');
const Avatar = ({
  variant = 'circular',
  className,
  src,
  style,
  onClick,
  other,
}) => {
  return /*#__PURE__*/ (0, _jsxRuntime.jsx)('div', {
    onClick: onClick,
    className: clsx(
      'CuteAvatar',
      variant == 'square' && 'CuteAvatar-square',
      variant == 'rounded' && 'CuteAvatar-rounded',
      variant == 'circular' && 'CuteAvatar-circular',
      className
    ),
    ...other,
    style: {
      ...style,
      backgroundImage: 'url(' + src + ')',
    },
  });
};
module.exports = {
  Avatar,
};
