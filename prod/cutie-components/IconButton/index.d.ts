import React from 'react';
interface IconButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: string;
  size?: 'large' | 'small' | 'medium';
  sx?: React.CSSProperties | object;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  children?: React.ReactNode;
  other?: object;
}

export const IconButton: React.FC<IconButtonProps>;
