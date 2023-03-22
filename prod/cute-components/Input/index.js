var _jsxRuntime = require('react/jsx-runtime');
const { useState } = require('react');
const { clsx } = require('clsx');
const Input = ({
  placeholder,
  className,
  style,
  type,
  value,
  onChange,
  classNameForWrapper,
  color = 'primary',
  variant = 'outlined',
  size = 'medium',
  square = false,
  label,
  startIcon,
  endIcon,
  message,
  autoFocus,
  defaultValue,
  autoComplete,
  maxLength,
  other,
  styleForWrapper,
  button,
}) => {
  const [focused, setFocused] = useState(false);
  return /*#__PURE__*/ (0, _jsxRuntime.jsxs)('div', {
    className: clsx(
      'CuteInputWrapper',
      `CuteInput-${color}`,
      `CuteInput-${variant}`,
      `CuteInput-${size}`,
      startIcon && !endIcon && 'CuteInput-iconStart',
      endIcon && !startIcon && 'CuteInput-iconEnd',
      startIcon && endIcon && 'CuteInput-icons',
      square && 'CuteInput-square',
      focused && `CuteInput-focused CuteInput-${color}-focused`,
      classNameForWrapper
    ),
    style: styleForWrapper,
    children: [
      label &&
        focused &&
        /*#__PURE__*/ (0, _jsxRuntime.jsx)('p', {
          className: 'CuteInput-label',
          children: placeholder,
        }),
      /*#__PURE__*/ (0, _jsxRuntime.jsxs)('div', {
        className: 'CuteInput-row',
        children: [
          startIcon,
          /*#__PURE__*/ (0, _jsxRuntime.jsx)('input', {
            minLength: maxLength,
            maxLength: maxLength,
            autoComplete: autoComplete,
            defaultValue: defaultValue,
            autoFocus: autoFocus,
            onFocus: () => setFocused(true),
            onBlur: () => setFocused(false),
            className: clsx('CuteInput', className),
            placeholder: label && focused ? '' : placeholder,
            type: type,
            value: value,
            onChange: onChange,
            ...other,
            style: style,
          }),
          endIcon,
          button,
        ],
      }),
      message &&
        /*#__PURE__*/ (0, _jsxRuntime.jsx)('p', {
          className: 'CuteInput-message',
          children: message,
        }),
    ],
  });
};
module.exports = {
  Input,
};
