import React from 'react';
import clsx from 'clsx';

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
  startIcon?: JSX.Element | SVGElement;
  endIcon?: JSX.Element | SVGElement;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  square?: boolean;
  ref?: any;
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
  ref,
  other,
}) => {
  return (
    // @ts-ignore
    <button
      disabled={disabled}
      type={type}
      ref={ref}
      className={clsx(
        'CuteButton',
        disabled && `CuteButton-${variant}-disabled`,
        size && `CuteButton-${size}`,
        startIcon && !endIcon && 'CuteButton-iconStart',
        endIcon && !startIcon && 'CuteButton-iconEnd',
        startIcon && endIcon && 'CuteButton-icons',
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
