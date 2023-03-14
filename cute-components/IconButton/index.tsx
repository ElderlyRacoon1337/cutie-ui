import React, { MouseEventHandler } from 'react';

interface IconButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  svg: any;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary';
  size?: 'large' | 'small' | 'medium';
  sx?: React.CSSProperties;
}

export const IconButton: React.FC<IconButtonProps> = ({
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
