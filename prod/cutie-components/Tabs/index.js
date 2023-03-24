import clsx from 'clsx';
import React from 'react';
import styles from './Tabs.module.scss';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export const Tabs = ({
  value,
  onChange,
  labels,
  children,
  className,
  variant = 'underlined',
  color = 'primary',
  size = 'medium',
  fullWidth,
  rounded,
  circle,
}) => {
  var _Array$from;
  return /*#__PURE__*/ _jsxs('div', {
    className: 'CuteTabs-wrapper',
    children: [
      /*#__PURE__*/ _jsx('div', {
        className: clsx(
          styles.CuteTabs,
          fullWidth && styles['CuteTabs-fullWidth'],
          className
        ),
        children:
          labels === null || labels === void 0
            ? void 0
            : labels.map((el, i) =>
                /*#__PURE__*/ _jsx(
                  'div',
                  {
                    onClick: (e) => onChange(e, i + 1),
                    className: clsx(
                      styles.CuteTab,
                      i == value - 1 &&
                        styles[`CuteTab-active-${variant}-${color}`],
                      rounded && styles['CuteTab-rounded'],
                      circle && styles['CuteTab-circle'],
                      styles[`CuteTabs-${size}`]
                    ),
                    children: el,
                  },
                  i
                )
              ),
      }),
      /*#__PURE__*/ _jsx('div', {
        className: styles.CutePanels,
        children:
          (_Array$from = Array.from(children)) === null ||
          _Array$from === void 0
            ? void 0
            : _Array$from.filter((el, i) => i + 1 == value),
      }),
    ],
  });
};
