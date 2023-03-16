import React from 'react';

interface IconProps {
  svg: JSX.Element | SVGElement;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary' | 'neutral';
  size?: 'large' | 'small' | 'medium';
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps>;
