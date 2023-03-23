import clsx from 'clsx';
import React from 'react';
import styles from './Avatar.module.scss';

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
        styles.CuteAvatar,
        variant == 'square' && styles['CuteAvatar-square'],
        variant == 'rounded' && styles['CuteAvatar-rounded'],
        variant == 'circular' && styles['CuteAvatar-circular'],
        className
      )}
      {...other}
      style={{ ...style, backgroundImage: 'url(' + src + ')' }}
    ></div>
  );
};
