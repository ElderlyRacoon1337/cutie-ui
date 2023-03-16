import clsx from 'clsx';
import React from 'react';

interface IconButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  icon: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary' | 'neutral' | 'white' | 'black' | 'text';
  size?: 'large' | 'small' | 'medium';
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  children?: React.ReactNode;
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
        color && variant && `CuteIconButton-${color}-${variant}`,
        className
      )}
      style={style}
    >
      {icon}
      {children}
    </button>
  );
};
