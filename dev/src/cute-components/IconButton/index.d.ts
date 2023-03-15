import React, { MouseEventHandler } from 'react';

interface IconButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  svg: any;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary';
  size?: 'large' | 'small' | 'medium';
  sx?: React.CSSProperties;
}

export const IconButton: React.FC<IconButtonProps>;
