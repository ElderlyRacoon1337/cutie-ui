var _jsxRuntime = require('react/jsx-runtime');
const { clsx } = require('clsx');
const Link = ({
  children,
  href,
  className,
  style,
  onClick,
  underlined = false,
  other,
}) => {
  return /*#__PURE__*/ (0, _jsxRuntime.jsx)('a', {
    href: href,
    onClick: onClick,
    className: clsx('CuteLink', underlined && 'CuteLink-underlined', className),
    ...other,
    style: style,
    children: children,
  });
};
module.exports = {
  Link,
};
