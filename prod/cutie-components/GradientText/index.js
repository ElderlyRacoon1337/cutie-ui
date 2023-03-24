import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from 'react/jsx-runtime';
export const GradientText = ({
  children,
  firstColor,
  secondColor,
  className,
  style,
  fontSize,
  fontWeight,
  rotate = '90',
  other,
}) => {
  return /*#__PURE__*/ _jsx('p', {
    className: clsx(className),
    style: {
      background: `linear-gradient(${rotate}deg, ${firstColor}, ${secondColor})`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontSize: fontSize + 'px',
      fontWeight: fontWeight,
      ...style,
    },
    ...other,
    children: children,
  });
};
