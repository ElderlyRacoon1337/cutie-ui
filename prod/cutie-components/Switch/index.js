import clsx from 'clsx';
import React from 'react';
import styles from './Switch.module.scss';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export const Switch = ({
  checked,
  size = 'medium',
  disabled = false,
  color = 'primary',
  onChange,
  other,
  className,
  style,
}) => {
  return /*#__PURE__*/ _jsx('div', {
    className: className,
    style: {
      minHeight: size == 'small' ? '18px' : size == 'medium' ? '20px' : '30px',
      display: 'flex',
      alignItems: 'center',
      ...style,
    },
    children: /*#__PURE__*/ _jsx('label', {
      children: /*#__PURE__*/ _jsxs('div', {
        className: clsx(
          styles[`CuteSwitch-wrapper`],
          styles[`CuteSwitch-${size}`],
          styles[`CuteSwitch-${color}`],
          disabled && styles['CuteSwitch-disabled'],
          !checked && styles['CuteSwitch-unchecked']
        ),
        children: [
          /*#__PURE__*/ _jsx('input', {
            onChange: onChange,
            type: 'checkbox',
            checked: checked,
            disabled: disabled,
            ...other,
          }),
          /*#__PURE__*/ _jsx('span', {
            className: styles.CuteSwitch,
            children: /*#__PURE__*/ _jsx('span', {
              className: styles['CuteSwitch-handle'],
            }),
          }),
        ],
      }),
    }),
  });
};
