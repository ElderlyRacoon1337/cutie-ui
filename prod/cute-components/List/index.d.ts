import React from 'react';

interface ListProps {
  className?: string;
  children?: any;
  style?: React.CSSProperties;
}

interface ListItemProps {
  className?: string;
  children: any;
  style?: React.CSSProperties;
  startIcon?: JSX.Element | SVGElement;
  endIcon?: JSX.Element | SVGElement;
  onClick?: any;
  active?: boolean;
}

export const List: React.FC<ListProps>;

export const ListItem: React.FC<ListItemProps>;

export const ListItemButton: React.FC<ListItemProps>;
