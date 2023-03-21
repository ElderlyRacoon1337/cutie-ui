import clsx from 'clsx';
import React from 'react';
import './index.scss';
import '../../cute-styles/index.scss';

interface AvatarProps {
  variant?: 'rounded' | 'square' | 'circular';
  className?: string;
  src: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<any>) => void;
  other?: object;
}

export const Avatar: React.FC<AvatarProps> = ({
  variant = 'circular',
  className,
  src,
  style,
  onClick,
  other,
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
      {...other}
      style={{ ...style, backgroundImage: 'url(' + src + ')' }}
    ></div>
  );
};
