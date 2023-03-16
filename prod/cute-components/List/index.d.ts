import React from 'react';

interface ListProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  startIcon?: JSX.Element | SVGElement;
  endIcon?: JSX.Element | SVGElement;
  onClick?: (event: React.MouseEvent<any>) => void;
  active?: boolean;
}

export const List: React.FC<ListProps>;

export const ListItem: React.FC<ListItemProps>;

export const ListItemButton: React.FC<ListItemProps>;
