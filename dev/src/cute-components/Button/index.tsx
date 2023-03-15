import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  children: any;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary';
  size?: 'large' | 'small' | 'medium';
  startIcon?: JSX.Element | SVGElement;
  endIcon?: JSX.Element | SVGElement;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className,
  onClick,
  color,
  size,
  startIcon,
  endIcon,
  style,
}) => {
  return (
    <button
      className={clsx(
        size && `${size}Button`,
        color && `${color}Button`,
        variant == 'outlined'
          ? 'buttonOutlined'
          : variant == 'contained'
          ? 'buttonContained'
          : 'buttonText',
        startIcon && !endIcon && 'buttonIconStart',
        endIcon && !startIcon && 'buttonIconEnd',
        startIcon && endIcon && 'buttonIcons',
        color && variant && `${color}Button${variant}`,
        className
      )}
      onClick={onClick}
      style={style}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};
