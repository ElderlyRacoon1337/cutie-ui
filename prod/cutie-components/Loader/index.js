import clsx from 'clsx';
import React from 'react';
import styles from './Loader.module.scss';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export const Loader = ({
  size = '40px',
  color = 'text',
  fatness = 4,
  style,
  className,
  other,
  circleDark,
  circleLight,
  duration = 0.8,
  variant = 1,
}) => {
  return /*#__PURE__*/ _jsxs(_Fragment, {
    children: [
      variant == 1 &&
        /*#__PURE__*/ _jsx('div', {
          className: clsx(
            styles.CuteSpinner1,
            styles[`CuteSpinner1-${color}`],
            circleDark && styles['CuteSpinner1-circleDark'],
            circleLight && styles['CuteSpinner1-circleLight'],
            className
          ),
          ...other,
          style: {
            width: size,
            height: size,
            borderTopColor: `var(--${color == 'text' ? 'textPrimary' : color})`,
            borderWidth: `${fatness}px`,
            animationDuration: duration + 's',
            ...style,
          },
        }),
      variant == 2 &&
        /*#__PURE__*/ _jsxs('div', {
          className: clsx(
            styles[`CuteSpinner2-${color}`],
            styles['CuteSpinner2'],
            className
          ),
          style: {
            width: size,
            height: size,
            ...style,
          },
          children: [
            /*#__PURE__*/ _jsx('div', {
              style: {
                width: size,
                height: size,
                borderWidth: `${fatness}px`,
              },
            }),
            /*#__PURE__*/ _jsx('div', {
              style: {
                width: size,
                height: size,
                borderWidth: `${fatness}px`,
              },
            }),
            /*#__PURE__*/ _jsx('div', {
              style: {
                width: size,
                height: size,
                borderWidth: `${fatness}px`,
              },
            }),
            /*#__PURE__*/ _jsx('div', {
              style: {
                width: size,
                height: size,
                borderWidth: `${fatness}px`,
              },
            }),
          ],
        }),
      variant == 3 &&
        /*#__PURE__*/ _jsxs('div', {
          className: clsx(
            styles.CuteSpinner3,
            styles[`CuteSpinner3-${color}`],
            className
          ),
          style: style,
          children: [
            /*#__PURE__*/ _jsx('div', {
              style: {
                width: size,
                height: size,
                backgroundColor: color,
                marginRight: fatness + 'px',
                animationDuration: duration + 's',
              },
            }),
            /*#__PURE__*/ _jsx('div', {
              style: {
                width: size,
                height: size,
                backgroundColor: color,
                marginRight: fatness + 'px',
                animationDuration: duration + 's',
              },
            }),
            /*#__PURE__*/ _jsx('div', {
              style: {
                width: size,
                height: size,
                backgroundColor: color,
                marginRight: fatness + 'px',
                animationDuration: duration + 's',
              },
            }),
          ],
        }),
    ],
  });
};
