import React from 'react';

interface MenuProps {
  open: boolean;
  anchorEl: any;
  onClose: () => void;
  children: any;
  className?: string;
  sx?: React.CSSProperties | object;
  fullWidth?: boolean;
  other?: object;
  disableScroll?: boolean;
}

interface MenuItemProps {
  className?: string;
  onClose?: (event: React.MouseEvent<any, MouseEvent>) => void;
  children?: any;
  sx?: React.CSSProperties | object;
  onClick?: (event: React.MouseEvent<any>) => void;
  startIcon?: any;
  endIcon?: any;
  divider?: boolean;
  other?: object;
}

export const Menu: React.FC<MenuProps>;

export const MenuItem: React.FC<MenuItemProps>;
