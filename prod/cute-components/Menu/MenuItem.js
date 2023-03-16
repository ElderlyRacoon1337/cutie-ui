function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}
const React = require('react');
const { clsx } = require('clsx');
const MenuItem = ({
  children,
  onClose,
  className,
  style,
  onClick,
  ...rest
}) => {
  return /*#__PURE__*/ React.createElement(
    'li',
    _extends({}, rest, {
      onClick: onClick
        ? (e) => {
            onClick(e);
            onClose(e);
          }
        : onClose,
      className: clsx('CuteMenuItem', className),
      style: style,
    }),
    children
  );
};
module.exports = {
  MenuItem,
};
