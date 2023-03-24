import clsx from 'clsx';
import React from 'react';
import styles from './IconButton.module.scss';
import { jsx as _jsx } from 'react/jsx-runtime';
export const IconButton = ({
  variant = 'text',
  className,
  onClick,
  size = 'medium',
  color = 'primary',
  style,
  disabled,
  type = 'button',
  children,
  other,
}) => {
  return /*#__PURE__*/ _jsx('button', {
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: clsx(
      styles.CuteIconButton,
      disabled && styles[`CuteIconButton-${variant}-disabled`],
      size && styles[`CuteIconButton-${size}`],
      styles[`CuteIconButton-${variant}`],
      color && variant && styles[`CuteIconButton-${color}-${variant}`],
      className
    ),
    ...other,
    style: style,
    children: children,
  });
};
