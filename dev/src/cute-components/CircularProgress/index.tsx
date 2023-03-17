import clsx from 'clsx';
import React from 'react';

interface CircularProgressProps {
  width?: number | string;
  fatness?: number | string;
  style?: React.CSSProperties;
  color?: 'primary' | 'secondary' | 'text';
  ref?: any;
  other?: object;
  className?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  width = 50,
  color = 'primary',
  fatness = 4,
  style,
  ref,
  className,
  other,
}) => {
  return (
    <div
      ref={ref}
      className={(clsx('CuteLoader'), className)}
      {...other}
      style={{
        width: `${width}px`,
        borderTopColor: `var(--${color == 'text' ? 'textPrimary' : color})`,
        borderWidth: `${fatness}px`,
        ...style,
      }}
    />
  );
};

export default CircularProgress;
