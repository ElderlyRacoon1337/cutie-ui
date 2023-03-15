import clsx from 'clsx';
import React from 'react';

interface IconButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  svg: any;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary';
  size?: 'large' | 'small' | 'medium';
  style?: React.CSSProperties;
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant,
  svg,
  className,
  onClick,
  size,
  color,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        size && `${size}IconButton`,
        color && `${color}IconButton`,
        color && variant && `${color}IconButton${variant}`,
        variant == 'outlined'
          ? 'iconButtonOutlined'
          : variant == 'contained'
          ? 'iconButtonContained'
          : 'iconButtonText',
        className
      )}
      style={style}
    >
      {svg}
    </button>
  );
};
