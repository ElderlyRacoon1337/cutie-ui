var _jsxRuntime = require('react/jsx-runtime');
const { useEffect } = require('react');
const { clsx } = require('clsx');
const { IconButton } = require('../IconButton');
const Alert = ({
  children,
  position = 'bottomCenter',
  color = 'primary',
  className,
  style,
  startIcon,
  onClose,
  withioutButton = false,
  duration = 3000,
  open,
  other,
}) => {
  if (!startIcon) {
    if (color == 'error') {
      startIcon = /*#__PURE__*/ (0, _jsxRuntime.jsx)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        className: 'w-6 h-6',
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
        }),
      });
    } else if (color == 'success') {
      startIcon = /*#__PURE__*/ (0, _jsxRuntime.jsx)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        className: 'w-6 h-6',
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M4.5 12.75l6 6 9-13.5',
        }),
      });
    }
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, duration);
    return () => {
      clearTimeout(timeout);
    };
  }, [open]);
  return /*#__PURE__*/ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children:
      open &&
      /*#__PURE__*/ (0, _jsxRuntime.jsxs)('div', {
        className: clsx(
          'CuteAlert',
          `CuteAlert-${position}`,
          `CuteAlert-${color}`,
          className
        ),
        ...other,
        style: style,
        children: [
          startIcon &&
            /*#__PURE__*/ (0, _jsxRuntime.jsx)('span', {
              className: 'CuteAlertIcon',
              children: startIcon,
            }),
          children,
          !withioutButton &&
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(IconButton, {
              color: 'white',
              onClick: onClose,
              children: /*#__PURE__*/ (0, _jsxRuntime.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: 1.5,
                stroke: 'currentColor',
                className: 'w-6 h-6',
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)('path', {
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  d: 'M6 18L18 6M6 6l12 12',
                }),
              }),
            }),
        ],
      }),
  });
};
module.exports = {
  Alert,
};
