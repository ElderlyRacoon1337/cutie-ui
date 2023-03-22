var _jsxRuntime = require('react/jsx-runtime');
const { clsx } = require('clsx');
const Skeleton = ({
  width,
  height,
  variant = 'square',
  className,
  style,
  other,
}) => {
  return /*#__PURE__*/ (0, _jsxRuntime.jsx)('div', {
    className: clsx('CuteSkeleton', `CuteSkeleton-${variant}`, className),
    style: {
      width: width + 'px',
      height: height + 'px',
      ...style,
    },
    ...other,
  });
};
module.exports = {
  Skeleton,
};
