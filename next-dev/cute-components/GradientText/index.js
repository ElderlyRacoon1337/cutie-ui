var _jsxRuntime = require('react/jsx-runtime');
const { clsx } = require('clsx');
const GradientText = ({
  children,
  firstColor,
  secondColor,
  className,
  style,
  fontSize,
  fontWeight,
  rotate = '90',
  other,
}) => {
  return /*#__PURE__*/ (0, _jsxRuntime.jsx)('p', {
    className: clsx('CuteGradientText', className),
    style: {
      background: `linear-gradient(${rotate}deg, ${firstColor}, ${secondColor})`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontSize: fontSize + 'px',
      fontWeight: fontWeight,
      ...style,
    },
    ...other,
    children: children,
  });
};
module.exports = {
  GradientText,
};
