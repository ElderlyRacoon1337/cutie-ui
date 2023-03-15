import React from 'react';

interface ListProps {
  className?: string;
  children?: any;
  sx?: React.CSSProperties;
}

interface ListItemProps {
  className?: string;
  children: any;
  sx?: React.CSSProperties;
  startIcon?: any;
  onClick?: any;
}

interface ListItemProps {
  className?: string;
  children: any;
  sx?: React.CSSProperties;
  startIcon?: any;
  onClick?: any;
}

export const List: React.FC<ListProps>;

export const ListItem: React.FC<ListItemProps>;

export const ListItemButton: React.FC<ListItemProps>;
