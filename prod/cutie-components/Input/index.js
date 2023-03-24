import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './Input.module.scss';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export const Input = ({
  placeholder,
  className,
  style,
  type,
  value,
  onChange,
  classNameForWrapper,
  color = 'primary',
  variant = 'outlined',
  size = 'medium',
  square = false,
  label,
  startIcon,
  endIcon,
  message,
  autoFocus,
  defaultValue,
  autoComplete,
  maxLength,
  other,
  styleForWrapper,
  button,
}) => {
  const [focused, setFocused] = useState(false);
  return /*#__PURE__*/ _jsxs('div', {
    className: clsx(
      styles.CuteInputWrapper,
      styles[`CuteInput-${color}`],
      styles[`CuteInput-${variant}`],
      styles[`CuteInput-${size}`],
      startIcon && !endIcon && styles['CuteInput-iconStart'],
      endIcon && !startIcon && styles['CuteInput-iconEnd'],
      startIcon && endIcon && styles['CuteInput-icons'],
      square && styles['CuteInput-square'],
      focused && [`CuteInput-focused`] && styles[`CuteInput-${color}-focused`],
      classNameForWrapper
    ),
    style: styleForWrapper,
    children: [
      label &&
        focused &&
        /*#__PURE__*/ _jsx('p', {
          className: styles['CuteInput-label'],
          children: placeholder,
        }),
      /*#__PURE__*/ _jsxs('div', {
        className: styles['CuteInput-row'],
        children: [
          startIcon,
          /*#__PURE__*/ _jsx('input', {
            minLength: maxLength,
            maxLength: maxLength,
            autoComplete: autoComplete,
            defaultValue: defaultValue,
            autoFocus: autoFocus,
            onFocus: () => setFocused(true),
            onBlur: () => setFocused(false),
            className: clsx(styles.CuteInput, className),
            placeholder: label && focused ? '' : placeholder,
            type: type,
            value: value,
            onChange: onChange,
            ...other,
            style: style,
          }),
          endIcon,
          React.Children.map(button, (child) =>
            /*#__PURE__*/
            // @ts-ignore
            React.cloneElement(child, {
              color: color,
              size: size,
            })
          ),
        ],
      }),
      message &&
        /*#__PURE__*/ _jsx('p', {
          className: styles['CuteInput-message'],
          children: message,
        }),
    ],
  });
};
