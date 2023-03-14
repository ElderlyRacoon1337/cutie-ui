import React from 'react';

interface MenuItemProps {
  className?: string;
  handleClose?: any;
  children?: any;
  sx?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  handleClose,
  className,
  sx,
}: any) => {
  return (
    <li style={sx} onClick={handleClose} className={`${className} menuItem`}>
      {children}
    </li>
  );
};

export default MenuItem;
