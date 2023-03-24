import clsx from 'clsx';
import React from 'react';
import styles from './IconButton.module.scss';

interface IconButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary' | 'neutral' | 'white' | 'black' | 'text';
  size?: 'large' | 'small' | 'medium';
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  children?: React.ReactNode;
  other?: object;
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant = 'text',
  className,
  onClick,
  size = 'medium',
  color = 'primary',
  style,
  disabled,
  type = 'button',
  children,
  other,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        styles.CuteIconButton,
        disabled && styles[`CuteIconButton-${variant}-disabled`],
        size && styles[`CuteIconButton-${size}`],
        styles[`CuteIconButton-${variant}`],
        color && variant && styles[`CuteIconButton-${color}-${variant}`],
        className
      )}
      {...other}
      style={style}
    >
      {children}
    </button>
  );
};
