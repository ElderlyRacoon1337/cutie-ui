import React from 'react';

interface IconButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  svg: any;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary';
  size?: 'large' | 'small' | 'medium';
  style?: React.CSSProperties;
}

export const IconButton: React.FC<IconButtonProps>;
