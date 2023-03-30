import React from 'react';
interface IconProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: string;
  sx?: React.CSSProperties | object;
  children?: React.ReactNode;
  other?: object;
  fontSize?: string | number;
}
export const Icon: React.FC<IconProps>;
