import clsx from 'clsx';
import React from 'react';

interface AvatarProps {
  variant?: 'rounded' | 'square' | 'circular';
  className?: string;
  src: string;
  style?: React.CSSProperties;
  onClick?: any;
}

export const Avatar: React.FC<AvatarProps> = ({
  variant = 'circular',
  className,
  src,
  style,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'avatar',
        variant == 'square' && 'avatarSquare',
        variant == 'rounded' && 'avatarRounded',
        variant == 'circular' && 'avatarCircular',
        className
      )}
      style={{ ...style, backgroundImage: 'url(' + src + ')' }}
    ></div>
  );
};
