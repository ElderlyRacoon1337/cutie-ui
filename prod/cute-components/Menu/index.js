const React = require('react');
const { useEffect, useRef, useState } = require('react');

const Menu = ({ open, anchorEl, handleClose, children, className, sx }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const menu = useRef(null);
  useEffect(() => {
    if (anchorEl) {
      const b = anchorEl.getBoundingClientRect();
      setHeight(b.y + b.height + 5);
      setWidth(b.x);
    }
    return () => {
      setHeight(0);
      setWidth(0);
    };
  }, [anchorEl]);
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    open &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'menuBackground',
          onClick: handleClose,
        },
        /*#__PURE__*/ React.createElement(
          'ul',
          {
            ref: menu,
            className: `${className} menu`,
            onClick: (e) => e.stopPropagation(),
            style:
              height == 0
                ? {
                    visibility: 'hidden',
                  }
                : {
                    ...sx,
                    top: `${height}px`,
                    left: `${width}px`,
                  },
          },
          children
        )
      )
  );
};

module.exports = {
  Menu,
};
