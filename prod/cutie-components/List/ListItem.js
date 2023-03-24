import clsx from 'clsx';
import React from 'react';
import styles from './List.module.scss';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export const ListItem = ({
  className,
  children,
  style,
  startIcon,
  onClick,
  active,
  endIcon,
  activeFilled,
  other,
  square,
}) => {
  return /*#__PURE__*/ _jsx('li', {
    onClick: onClick,
    className: clsx(
      styles.CuteListItem,
      active && styles['CuteListItem-active'],
      activeFilled && styles['CuteListItem-activeFilled'],
      startIcon && !endIcon && styles['CuteListItem-iconStart'],
      endIcon && !startIcon && styles['CuteListItem-iconEnd'],
      startIcon && endIcon && styles['CuteListItem-icons'],
      square && styles['CuteListItem-square'],
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
                className: styles.CuteListItemChildren,
                children: children,
              }),
              endIcon,
            ],
          })
        : children,
  });
};
