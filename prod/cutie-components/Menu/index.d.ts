import React from 'react';

interface MenuProps {
  open: boolean;
  anchorEl: React.ReactNode;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  sx?: React.CSSProperties | object;
  fullWidth?: boolean;
  other?: object;
  disableScroll?: boolean;
}

interface MenuItemProps {
  className?: string;
  onClose?: (event: React.MouseEvent<any, MouseEvent>) => void;
  children?: React.ReactNode;
  sx?: React.CSSProperties | object;
  onClick?: (event: React.MouseEvent<any>) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  divider?: boolean;
  other?: object;
}

export const Menu: React.FC<MenuProps>;

export const MenuItem: React.FC<MenuItemProps>;
