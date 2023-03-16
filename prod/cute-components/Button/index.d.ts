import React from 'react';

interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary' | 'neutral';
  size?: 'large' | 'small' | 'medium';
  startIcon?: JSX.Element | SVGElement;
  endIcon?: JSX.Element | SVGElement;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

export const Button: React.FC<ButtonProps>;
