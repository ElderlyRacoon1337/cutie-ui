import clsx from 'clsx';
import React from 'react';
import styles from './List.module.scss';
import { jsx as _jsx } from 'react/jsx-runtime';
export const List = ({ children, className, style, other, square, color }) => {
  return /*#__PURE__*/ _jsx('ul', {
    className: clsx(
      styles.CuteList,
      styles[`CuteList-${color}`],
      square && styles['CuteList-square'],
      className
    ),
    ...other,
    style: style,
    children: children,
  });
};
