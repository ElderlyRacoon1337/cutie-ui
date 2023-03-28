import React from 'react';
interface IconButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: string;
  size?: 'large' | 'small' | 'medium';
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  children?: React.ReactNode;
  other?: object;
}
export const IconButton: React.FC<IconButtonProps>;
