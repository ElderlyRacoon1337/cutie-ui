import React from 'react';

interface AvatarProps {
  variant?: 'round' | 'square';
  className?: string;
  src: string;
  sx?: React.CSSProperties;
  onClick?: any;
}

export const Avatar: React.FC<AvatarProps> = ({
  variant,
  className,
  src,
  sx,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`avatar ${className} ${
        variant == 'square' ? 'avatar avatarSquare' : 'avatar'
      }`}
      style={{ ...sx, backgroundImage: 'url(' + src + ')' }}
    ></div>
  );
};
