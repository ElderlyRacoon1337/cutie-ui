const React = require('react');

const Input = ({
  placeholder,
  className,
  sx,
  type,
  value,
  onChange,
  startIcon,
}) => {
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    startIcon
      ? /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'searchInput',
          },
          startIcon,
          /*#__PURE__*/ React.createElement('input', {
            className: `input ${className}`,
            placeholder: placeholder,
            type: type,
            value: value,
            onChange: onChange,
            style: sx,
          })
        )
      : /*#__PURE__*/ React.createElement('input', {
          className: `input ${className}`,
          placeholder: placeholder,
          type: type,
          value: value,
          onChange: onChange,
          style: sx,
        })
  );
};

module.exports = {
  Input,
};
