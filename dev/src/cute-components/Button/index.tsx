import React from 'react';
import clsx from 'clsx';
import './index.scss';

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
        'CuteButton',
        disabled && `CuteButton-${variant}-disabled`,
        size && `CuteButton-${size}`,
        startIcon && !endIcon && 'CuteButton-iconStart',
        endIcon && !startIcon && 'CuteButton-iconEnd',
        startIcon && endIcon && 'CuteButton-icons',
        `CuteButton-${variant}`,
        square && 'CuteButton-square',
        color && variant && `CuteButton-${color}-${variant}`,
        className
      )}
      onClick={onClick}
      {...other}
      style={style}
    >
      {startIcon}
      <div className="CuteButtonChildren">{children}</div>
      {endIcon}
    </button>
  );
};
