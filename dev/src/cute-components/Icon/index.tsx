import clsx from 'clsx';
import React from 'react';

interface IconProps {
  svg: any;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary';
  size?: 'large' | 'small' | 'medium';
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({
  svg,
  className,
  size,
  color,
  style,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'icon',
        size && `${size}Icon`,
        color && `${color}Icon`,
        className
      )}
      style={style}
    >
      {svg}
    </div>
  );
};
