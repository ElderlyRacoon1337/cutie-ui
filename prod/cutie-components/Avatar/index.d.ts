import React from 'react';

interface AvatarProps {
  variant?: 'rounded' | 'square' | 'circular';
  className?: string;
  src: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<any>) => void;
  other?: object;
  width?: string | number;
}

export const Avatar: React.FC<AvatarProps>;
