import React from 'react';

interface IconButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  svg: JSX.Element | SVGElement;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary' | 'neutral';
  size?: 'large' | 'small' | 'medium';
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

export const IconButton: React.FC<IconButtonProps>;
