import React from 'react';

interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: string;
  size?: 'large' | 'small' | 'medium';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  square?: boolean;
  other?: object;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps>;
