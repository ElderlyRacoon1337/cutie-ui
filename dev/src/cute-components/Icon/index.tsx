import clsx from 'clsx';
import React from 'react';
import styles from './Icon.module.scss';

interface IconProps {
  icon?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary' | 'neutral' | 'black' | 'white' | 'text';
  size?: 'large' | 'small' | 'medium';
  style?: React.CSSProperties;
  children?: React.ReactNode;
  other?: object;
  fontSize?: number | string;
}

export const Icon: React.FC<IconProps> = ({
  icon,
  className,
  size = 'medium',
  color = 'primary',
  style,
  onClick,
  children,
  other,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        styles.CuteIcon,
        size && styles[`CuteIcon-${size}`],
        color && styles[`CuteIcon-${color}`],
        className
      )}
      {...other}
      style={style}
    >
      {icon}
      {children}
    </div>
  );
};
