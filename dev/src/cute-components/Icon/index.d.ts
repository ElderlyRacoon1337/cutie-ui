import React, { MouseEventHandler } from 'react';

interface IconProps {
  svg: any;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary';
  size?: 'large' | 'small' | 'medium';
  sx?: React.CSSProperties;
}

export const Icon: React.FC<IconProps>;
