import React from 'react';

interface AvatarProps {
  variant?: 'round' | 'square';
  className?: string;
  src: string;
  sx?: React.CSSProperties;
  onClick?: any;
}

export const Avatar: React.FC<AvatarProps>;
