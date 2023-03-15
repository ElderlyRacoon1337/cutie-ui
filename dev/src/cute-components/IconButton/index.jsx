import React from 'react';

export const IconButton = ({
  variant,
  svg,
  className,
  onClick,
  size,
  color,
  sx,
}) => {
  return (
    <div className={`${color} ${size}`}>
      <button
        onClick={onClick}
        className={`${className} ${
          variant == 'outlined'
            ? 'iconButtonOutlined'
            : variant == 'contained'
            ? 'iconButtonContained'
            : 'iconButtonText'
        }
        `}
        style={sx}
      >
        {svg}
      </button>
    </div>
  );
};
