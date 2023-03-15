import React from 'react';

interface MenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: any;
  children: any;
  className?: string;
  style?: React.CSSProperties;
}
interface MenuItemProps {
  className?: string;
  onClose?: any;
  children?: any;
  style?: React.CSSProperties;
  onClick?: any;
}

export const Menu: React.FC<MenuProps>;

export const MenuItem: React.FC<MenuItemProps>;
