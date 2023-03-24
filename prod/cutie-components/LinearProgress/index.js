import clsx from 'clsx';
import styles from './LinearProgress.module.scss';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export const LinearProgress = ({
  value,
  className,
  height = 3,
  style,
  color = 'text',
  loader,
  duration = 1,
  variant,
}) => {
  return /*#__PURE__*/ _jsxs('div', {
    className: clsx(
      styles.CuteProgress,
      loader && styles[`CuteProgress-loader${variant}`],
      styles[`CuteProgress-${color}`],
      loader && styles[`CuteProgress-loader`],
      className
    ),
    style: {
      height,
      ...style,
    },
    children: [
      /*#__PURE__*/ _jsx('div', {
        style: {
          width: value + '%',
        },
      }),
      /*#__PURE__*/ _jsx('div', {
        style: {
          animationDuration: duration + 's',
        },
      }),
    ],
  });
};
