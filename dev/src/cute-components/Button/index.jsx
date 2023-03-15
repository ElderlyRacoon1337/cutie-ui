import React from 'react';
import clsx from 'clsx';

export const Button = ({
  variant,
  children,
  className,
  onClick,
  color,
  size,
  startIcon,
  sx,
}) => {
  return (
    <div className={clsx(color, size)}>
      <button
        onClick={onClick}
        className={clsx(
          className,
          variant == 'outlined'
            ? 'buttonOutlined'
            : variant == 'contained'
            ? 'buttonContained'
            : 'buttonText',
          color
        )}
        style={sx}
      >
        {children}
      </button>
    </div>
  );
};
