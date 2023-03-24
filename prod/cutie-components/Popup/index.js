import clsx from 'clsx';
import React, { useEffect } from 'react';
import styles from './Popup.module.scss';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export const Popup = ({ open, onClose, children, style, className, other }) => {
  const prevent = (ev) => ev.preventDefault();
  useEffect(() => {
    if (open) {
      document.addEventListener('wheel', prevent, {
        passive: false,
      });
    }
    return () => {
      document.removeEventListener('wheel', prevent);
    };
  }, [open]);
  return /*#__PURE__*/ _jsx(_Fragment, {
    children:
      open &&
      /*#__PURE__*/ _jsx('div', {
        className: styles.CutePopup,
        onClick: onClose,
        children: /*#__PURE__*/ _jsx('div', {
          className: clsx(styles.CutePupupElement, className),
          onClick: (e) => e.stopPropagation(),
          ...other,
          style: style,
          children: children,
        }),
      }),
  });
};
