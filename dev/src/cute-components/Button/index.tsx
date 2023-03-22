import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'white'
    | 'black'
    | 'text'
    | 'error'
    | 'success';
  size?: 'large' | 'small' | 'medium';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  square?: boolean;
  other?: object;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'text',
  children,
  className,
  onClick,
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  style,
  disabled,
  type = 'button',
  square,
  other,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={clsx(
        styles.CuteButton,
        disabled && styles[`CuteButton-${variant}-disabled`],
        size && styles[`CuteButton-${size}`],
        startIcon && !endIcon && styles['CuteButton-iconStart'],
        endIcon && !startIcon && styles['CuteButton-iconEnd'],
        startIcon && endIcon && styles['CuteButton-icons'],
        styles[`CuteButton-${variant}`],
        square && styles['CuteButton-square'],
        color && variant && styles[`CuteButton-${color}-${variant}`],
        className
      )}
      onClick={onClick}
      {...other}
      style={style}
    >
      {startIcon || endIcon ? (
        <>
          {startIcon}
          <div className={styles.CuteButtonChildren}>{children}</div>
          {endIcon}
        </>
      ) : (
        children
      )}
    </button>
  );
};
