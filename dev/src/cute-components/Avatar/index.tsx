import clsx from 'clsx';
import React from 'react';

interface AvatarProps {
  variant?: 'rounded' | 'square' | 'circular';
  className?: string;
  src: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<any>) => void;
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
        'CuteAvatar',
        variant == 'square' && 'CuteAvatar-square',
        variant == 'rounded' && 'CuteAvatar-rounded',
        variant == 'circular' && 'CuteAvatar-circular',
        className
      )}
      style={{ ...style, backgroundImage: 'url(' + src + ')' }}
    ></div>
  );
};
