const React = require('react');
const { clsx } = require('clsx');

const Popup = ({ open, onClose, children, style }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    open &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'popup',
          onClick: onClose,
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'popupElement',
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
