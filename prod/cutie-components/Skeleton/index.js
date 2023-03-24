import clsx from 'clsx';
import React from 'react';
import styles from './Skeleton.module.scss';
import { jsx as _jsx } from 'react/jsx-runtime';
export const Skeleton = ({
  width,
  height,
  variant = 'square',
  className,
  style,
  other,
}) => {
  return /*#__PURE__*/ _jsx('div', {
    className: clsx(
      styles.CuteSkeleton,
      styles[`CuteSkeleton-${variant}`],
      className
    ),
    style: {
      width: width + 'px',
      height: height + 'px',
      ...style,
    },
    ...other,
  });
};
