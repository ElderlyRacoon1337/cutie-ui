const React = require('react');

const Popup = ({ open, handleClose, children, sx }) => {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    open &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'popup',
          onClick: handleClose,
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'popupElement',
            onClick: (e) => e.stopPropagation(),
            style: sx,
          },
          children
        )
      )
  );
};

module.exports = {
  Popup,
};
