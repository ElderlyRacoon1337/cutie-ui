import React from 'react';

interface ButtonProps {
  variant?:
    | 'contained'
    | 'outlined'
    | 'text'
    | 'text2'
    | 'outlined2'
    | 'outlined3'
    | 'outlined4'
    | 'contained2'
    | 'contained3'
    | 'contained4';
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
  sx?: React.CSSProperties | object;
}

export const Button: React.FC<ButtonProps>;
