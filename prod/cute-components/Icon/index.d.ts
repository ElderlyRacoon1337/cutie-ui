import React from 'react';

interface IconProps {
  svg: any;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary';
  size?: 'large' | 'small' | 'medium';
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps>;
