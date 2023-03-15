import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  children: any;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary';
  size?: 'large' | 'small' | 'medium';
  startIcon?: any;
  sx?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps>;
