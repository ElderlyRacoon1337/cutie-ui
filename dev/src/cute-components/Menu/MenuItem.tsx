import clsx from 'clsx';
import React from 'react';

interface MenuItemProps {
  className?: string;
  onClose?: any;
  children?: any;
  style?: React.CSSProperties;
  onClick?: any;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  onClose,
  className,
  style,
  onClick,
  ...rest
}) => {
  return (
    <li
      {...rest}
      onClick={
        onClick
          ? (e) => {
              onClick(e);
              onClose(e);
            }
          : onClose
      }
      className={clsx('menuItem', className)}
      style={style}
    >
      {children}
    </li>
  );
};
