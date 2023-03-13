import React from 'react';

interface AvatarProps {
  variant?: 'round' | 'square';
  className?: string;
  src: string;
  sx?: React.CSSProperties;
}

const Avatar: React.FC<AvatarProps> = ({ variant, className, src, sx }) => {
  return (
    <div
      className={`avatar ${className} ${
        variant == 'square' ? 'avatar avatarSquare' : 'avatar'
      }`}
      style={{ ...sx, backgroundImage: 'url(' + src + ')' }}
    ></div>
  );
};

export default Avatar;
