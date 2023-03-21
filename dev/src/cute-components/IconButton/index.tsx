import clsx from 'clsx';
import React from 'react';
import './index.scss';

interface IconButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  icon?: React.ReactNode;
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
  icon,
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
        'CuteIconButton',
        disabled && `CuteIconButton-${variant}-disabled`,
        size && `CuteIconButton-${size}`,
        `CuteIconButton-${variant}`,
        color && variant && `CuteIconButton-${color}-${variant}`,
        className
      )}
      {...other}
      style={style}
    >
      {icon}
      {children}
    </button>
  );
};
