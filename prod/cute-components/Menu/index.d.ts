import React from 'react';

interface MenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: any;
  children: any;
  className?: string;
  sx?: React.CSSProperties;
}

interface MenuItemProps {
  className?: string;
  handleClose?: any;
  children?: any;
  sx?: React.CSSProperties;
  onClick?: any;
}

export const Menu: React.FC<MenuProps>;

export const MenuItem: React.FC<MenuItemProps>;
