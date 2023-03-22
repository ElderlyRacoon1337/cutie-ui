var _jsxRuntime = require('react/jsx-runtime');
const { useEffect, useRef, useState } = require('react');
const { clsx } = require('clsx');
const Menu = ({
  open,
  anchorEl,
  onClose,
  children,
  className,
  style,
  fullWidth,
  other,
}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [widthParent, setWidthParent] = useState(0);
  const menu = useRef(null);
  const setActualValues = () => {
    if (anchorEl && menu.current) {
      document.body.style.overflow = 'hidden';
      const clicked = anchorEl.getBoundingClientRect();
      const menuEl = menu.current.getBoundingClientRect();
      fullWidth && setWidthParent(clicked.width);
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
        setHeight(clicked.y + clicked.height + 3);
      }
    }
  };
  useEffect(() => {
    setActualValues();
    return () => {
      setHeight(0);
      setWidth(0);
      setWidthParent(0);
      document.body.style.overflow = '';
    };
  }, [anchorEl]);
  return /*#__PURE__*/ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children:
      open &&
      /*#__PURE__*/ (0, _jsxRuntime.jsx)('div', {
        className: 'CuteMenuBackground',
        onClick: onClose,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)('ul', {
          ref: menu,
          className: clsx('CuteMenu', className),
          onClick: (e) => e.stopPropagation(),
          ...other,
          style:
            height == 0
              ? {
                  visibility: 'hidden',
                  minWidth: widthParent,
                }
              : {
                  top: `${height}px`,
                  left: `${width}px`,
                  minWidth: widthParent,
                  ...style,
                },
          children: children,
        }),
      }),
  });
};
module.exports = {
  Menu,
};
