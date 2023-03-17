import clsx from 'clsx';
import React from 'react';

interface IconProps {
  icon: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary' | 'neutral' | 'black' | 'white' | 'text';
  size?: 'large' | 'small' | 'medium';
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: any;
  other?: object;
}

export const Icon: React.FC<IconProps> = ({
  icon,
  className,
  size = 'medium',
  color = 'primary',
  style,
  onClick,
  children,
  ref,
  other,
}) => {
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={clsx(
        'CuteIcon',
        size && `CuteIcon-${size}`,
        color && `CuteIcon-${color}`,
        className
      )}
      {...other}
      style={style}
    >
      {icon}
      {children}
    </div>
  );
};
