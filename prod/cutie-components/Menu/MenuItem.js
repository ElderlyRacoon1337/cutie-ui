import clsx from 'clsx';
import React from 'react';
import styles from './Menu.module.scss';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export const MenuItem = ({
  children,
  onClose,
  className,
  style,
  onClick,
  startIcon,
  endIcon,
  divider,
  other,
}) => {
  return /*#__PURE__*/ _jsx('li', {
    onClick: onClick
      ? (e) => {
          onClick(e);
          onClose && onClose(e);
        }
      : onClose,
    className: clsx(
      styles.CuteMenuItem,
      startIcon && !endIcon && styles['CuteMenuItem-iconStart'],
      endIcon && !startIcon && styles['CuteMenuItem-iconEnd'],
      startIcon && endIcon && styles['CuteMenuItem-icons'],
      divider && styles['CuteMenuItem-divider'],
      className
    ),
    ...other,
    style: style,
    children:
      startIcon || endIcon
        ? /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
              startIcon,
              /*#__PURE__*/ _jsx('div', {
                className: styles.CuteMenuItemChildren,
                children: children,
              }),
              endIcon,
            ],
          })
        : children,
  });
};
