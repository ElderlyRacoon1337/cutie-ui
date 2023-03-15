const React = require('react');
const { clsx } = require('clsx');
const Input = ({
  placeholder,
  className,
  style,
  type,
  value,
  onChange,
  startIcon,
  classNameForWrapper,
}) => {
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    startIcon
      ? /*#__PURE__*/ React.createElement(
          'div',
          {
            className: clsx('searchInput', classNameForWrapper),
            style: style,
          },
          startIcon,
          /*#__PURE__*/ React.createElement('input', {
            className: clsx('input', className),
            placeholder: placeholder,
            type: type,
            value: value,
            onChange: onChange,
          })
        )
      : /*#__PURE__*/ React.createElement('input', {
          className: clsx('input', className),
          placeholder: placeholder,
          type: type,
          value: value,
          onChange: onChange,
          style: style,
        })
  );
};
module.exports = {
  Input,
};
