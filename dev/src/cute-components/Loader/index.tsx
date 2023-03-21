import clsx from 'clsx';
import React from 'react';
import './index.scss';

interface LoaderProps {
  width?: number | string;
  fatness?: number | string;
  style?: React.CSSProperties;
  color?: 'primary' | 'secondary' | 'neutral' | 'text';
  other?: object;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  width = 50,
  color = 'text',
  fatness = 4,
  style,
  className,
  other,
}) => {
  return (
    <div
      className={(clsx('CuteLoader'), `CuteLoader-${color}`, className)}
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

export default Loader;
