import clsx from 'clsx';
import React from 'react';
import styles from './Avatar.module.scss';
import { jsx as _jsx } from 'react/jsx-runtime';
export const Avatar = ({
  variant = 'circular',
  className,
  src,
  style,
  onClick,
  other,
}) => {
  return /*#__PURE__*/ _jsx('div', {
    onClick: onClick,
    className: clsx(
      styles.CuteAvatar,
      variant == 'square' && styles['CuteAvatar-square'],
      variant == 'rounded' && styles['CuteAvatar-rounded'],
      variant == 'circular' && styles['CuteAvatar-circular'],
      className
    ),
    ...other,
    style: {
      ...style,
      backgroundImage: 'url(' + src + ')',
    },
  });
};
