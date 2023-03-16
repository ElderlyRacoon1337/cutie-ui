const React = require('react');
const { clsx } = require('clsx');
const { useEffect } = require('react');
const Popup = ({ open, onClose, children, style, className }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    open &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'CutePopup',
          onClick: onClose,
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: clsx('CutePupupElement', className),
            onClick: (e) => e.stopPropagation(),
            style: style,
          },
          children
        )
      )
  );
};
module.exports = {
  Popup,
};
