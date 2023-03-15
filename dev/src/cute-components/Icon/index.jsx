import React from 'react';

export const Icon = ({ svg, className, size, color, sx, onClick }) => {
  return (
    <div className={`${color} ${size}`}>
      <div
        onClick={onClick}
        className={`${className} ${'icon'}
        `}
        style={sx}
      >
        {svg}
      </div>
    </div>
  );
};
