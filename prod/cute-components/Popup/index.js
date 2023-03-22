var _jsxRuntime = require('react/jsx-runtime');
const { useEffect } = require('react');
const { clsx } = require('clsx');
const Popup = ({ open, onClose, children, style, className, other }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  return /*#__PURE__*/ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children:
      open &&
      /*#__PURE__*/ (0, _jsxRuntime.jsx)('div', {
        className: 'CutePopup',
        onClick: onClose,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)('div', {
          className: clsx('CutePupupElement', className),
          onClick: (e) => e.stopPropagation(),
          ...other,
          style: style,
          children: children,
        }),
      }),
  });
};
module.exports = {
  Popup,
};
