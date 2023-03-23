import clsx from 'clsx';
import React from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
  size?: number | string;
  fatness?: number | string;
  style?: React.CSSProperties;
  color?: 'primary' | 'secondary' | 'neutral' | 'text' | 'white' | 'black';
  other?: object;
  className?: string;
  circleDark?: boolean;
  circleLight?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  size = '40px',
  color = 'text',
  fatness = 4,
  style,
  className,
  other,
  circleDark,
  circleLight,
}) => {
  return (
    <div
      className={clsx(
        styles.CuteLoader,
        styles[`CuteLoader-${color}`],
        circleDark && styles['CuteLoader-circleDark'],
        circleLight && styles['CuteLoader-circleLight'],
        className
      )}
      {...other}
      style={{
        width: size,
        height: size,
        borderTopColor: `var(--${color == 'text' ? 'textPrimary' : color})`,
        borderWidth: `${fatness}px`,
        ...style,
      }}
    />
  );
};

export default Loader;
