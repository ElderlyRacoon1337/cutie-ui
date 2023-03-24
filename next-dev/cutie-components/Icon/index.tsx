import clsx from 'clsx';
import React from 'react';
import styles from './Icon.module.scss';

interface IconProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary' | 'neutral' | 'black' | 'white' | 'text';
  size?: 'large' | 'small' | 'medium';
  style?: React.CSSProperties;
  children?: React.ReactNode;
  other?: object;
  fontSize?: string | number;
}

export const Icon: React.FC<IconProps> = ({
  className,
  size = 'medium',
  color,
  style,
  onClick,
  children,
  other,
  fontSize,
}) => {
  return (
    <>
      {React.Children.map(children, (child) =>
        // @ts-ignore
        React.cloneElement(child, {
          className: `${clsx(
            styles.CuteIcon,
            size && styles[`CuteIcon-${size}`],
            color && styles[`CuteIcon-${color}`],
            className
          )}`,
          style: { fontSize: fontSize, ...style },
          ...other,
          onClick: onClick,
        })
      )}
    </>
  );
};
