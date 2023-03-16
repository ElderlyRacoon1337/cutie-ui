import React from 'react';

interface MenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: (event: React.MouseEvent<any, MouseEvent>) => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface MenuItemProps {
  className?: string;
  onClose: (event: React.MouseEvent<any, MouseEvent>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<any>) => void;
}

export const Menu: React.FC<MenuProps>;

export const MenuItem: React.FC<MenuItemProps>;
