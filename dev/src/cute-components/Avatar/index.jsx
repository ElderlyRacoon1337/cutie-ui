import React from 'react';

export const Avatar = ({ variant, className, src, sx, onClick }) => {
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
