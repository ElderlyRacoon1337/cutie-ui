import React from 'react';

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
export const Button: React.FC<ButtonProps>;
