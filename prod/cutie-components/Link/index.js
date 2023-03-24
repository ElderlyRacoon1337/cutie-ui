import clsx from 'clsx';
import React from 'react';
import styles from './Link.module.scss';
import { jsx as _jsx } from 'react/jsx-runtime';
export const Link = ({
  children,
  href,
  className,
  style,
  onClick,
  underlined = false,
  other,
}) => {
  return /*#__PURE__*/ _jsx('a', {
    href: href,
    onClick: onClick,
    className: clsx(
      styles.CuteLink,
      underlined && styles['CuteLink-underlined'],
      className
    ),
    ...other,
    style: style,
    children: children,
  });
};
