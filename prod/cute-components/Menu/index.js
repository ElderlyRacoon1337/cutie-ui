const React = require('react');
const { clsx } = require('clsx');
const { useEffect, useRef, useState } = require('react');
const Menu = ({ open, anchorEl, onClose, children, className, style }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const menu = useRef(null);
  useEffect(() => {
    if (anchorEl && menu.current) {
      const clicked = anchorEl.getBoundingClientRect();
      const menuEl = menu.current.getBoundingClientRect();
      document.body.style.overflow = 'hidden';
      const rightOut = window.innerWidth - clicked.left - menuEl.width;
      if (rightOut < 0) {
        setWidth(clicked.x + rightOut - 10);
      } else {
        setWidth(clicked.x);
      }
      const bottomOut = window.innerHeight - clicked.top - menuEl.height - 50;
      if (bottomOut < 0) {
        setHeight(
          clicked.y + bottomOut + 40 - (window.innerHeight - clicked.y)
        );
      } else {
        setHeight(clicked.y + clicked.height + 5);
      }
    }
    return () => {
      setHeight(0);
      setWidth(0);
      document.body.style.overflow = '';
    };
  }, [anchorEl]);
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    open &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'CuteMenuBackground',
          onClick: onClose,
        },
        /*#__PURE__*/ React.createElement(
          'ul',
          {
            ref: menu,
            className: clsx('CuteMenu', className),
            onClick: (e) => e.stopPropagation(),
            style:
              height == 0
                ? {
                    visibility: 'hidden',
                  }
                : {
                    ...style,
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
