import clsx from 'clsx';
import React from 'react';
import styles from './Icon.module.scss';
import { Fragment as _Fragment } from 'react/jsx-runtime';
import { jsx as _jsx } from 'react/jsx-runtime';
export const Icon = ({
  className,
  size = 'medium',
  color,
  style,
  onClick,
  children,
  other,
  fontSize,
}) => {
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: React.Children.map(children, (child) =>
      /*#__PURE__*/
      // @ts-ignore
      React.cloneElement(child, {
        className: `${clsx(
          styles.CuteIcon,
          size && styles[`CuteIcon-${size}`],
          color && styles[`CuteIcon-${color}`],
          className
        )}`,
        style: {
          fontSize: fontSize,
          ...style,
        },
        ...other,
        onClick: onClick,
      })
    ),
  });
};
