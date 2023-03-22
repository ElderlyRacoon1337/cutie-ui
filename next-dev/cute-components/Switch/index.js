var _jsxRuntime = require('react/jsx-runtime');
const { clsx } = require('clsx');
const Switch = ({
  checked,
  size = 'medium',
  disabled = false,
  color = 'primary',
  onChange,
  other,
  className,
  style,
}) => {
  return /*#__PURE__*/ (0, _jsxRuntime.jsx)('div', {
    className: className,
    style: {
      minHeight: '30px',
      display: 'flex',
      alignItems: 'center',
      ...style,
    },
    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)('form', {
      children: /*#__PURE__*/ (0, _jsxRuntime.jsx)('label', {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)('div', {
          className: clsx(
            `CuteSwitch-wrapper`,
            `CuteSwitch-${size}`,
            `CuteSwitch-${color}`,
            disabled && 'CuteSwitch-disabled',
            !checked && 'CuteSwitch-unchecked'
          ),
          children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)('input', {
              onChange: onChange,
              type: 'checkbox',
              checked: checked,
              disabled: disabled,
              ...other,
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)('span', {
              className: `CuteSwitch`,
              children: /*#__PURE__*/ (0, _jsxRuntime.jsx)('span', {
                className: 'CuteSwitch-handle',
              }),
            }),
          ],
        }),
      }),
    }),
  });
};
module.exports = {
  Switch,
};
