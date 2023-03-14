import React from 'react';

interface MenuItemProps {
  className?: string;
  handleClose?: any;
  children?: any;
  sx?: React.CSSProperties;
  onClick?: any;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  handleClose,
  className,
  sx,
  onClick,
}: any) => {
  return (
    <li
      onClick={() => {
        handleClose();
        onClick();
      }}
      className={`${className} menuItem`}
      style={sx}
    >
      {children}
    </li>
  );
};
