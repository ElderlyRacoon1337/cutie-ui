var _jsxRuntime = require('react/jsx-runtime');
const { clsx } = require('clsx');
const Loader = ({
  width = 50,
  color = 'text',
  fatness = 4,
  style,
  className,
  other,
}) => {
  return /*#__PURE__*/ (0, _jsxRuntime.jsx)('div', {
    className: (clsx('CuteLoader'), `CuteLoader-${color}`, className),
    ...other,
    style: {
      width: `${width}px`,
      borderTopColor: `var(--${color == 'text' ? 'textPrimary' : color})`,
      borderWidth: `${fatness}px`,
      ...style,
    },
  });
};
module.exports = {
  Loader,
};
