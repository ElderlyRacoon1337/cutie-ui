import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export const Button = ({
  variant = 'text',
  children,
  className,
  onClick,
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  style,
  disabled,
  type = 'button',
  square,
  other,
}) => {
  return /*#__PURE__*/ _jsx('button', {
    disabled: disabled,
    type: type,
    className: clsx(
      styles.CuteButton,
      disabled && styles[`CuteButton-${variant}-disabled`],
      size && styles[`CuteButton-${size}`],
      startIcon && !endIcon && styles['CuteButton-iconStart'],
      endIcon && !startIcon && styles['CuteButton-iconEnd'],
      startIcon && endIcon && styles['CuteButton-icons'],
      styles[`CuteButton-${variant}`],
      square && styles['CuteButton-square'],
      color && variant && styles[`CuteButton-${color}-${variant}`],
      className
    ),
    onClick: onClick,
    ...other,
    style: style,
    children:
      startIcon || endIcon
        ? /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
              startIcon,
              /*#__PURE__*/ _jsx('div', {
                className: styles.CuteButtonChildren,
                children: children,
              }),
              endIcon,
            ],
          })
        : children,
  });
};
