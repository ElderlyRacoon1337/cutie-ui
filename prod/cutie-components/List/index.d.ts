import React from 'react';

interface ListProps {
  className?: string;
  children?: React.ReactNode;
  other?: object;
  square?: boolean;
  sx?: React.CSSProperties | object;
}

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<any>) => void;
  active?: boolean;
  activeFilled?: boolean;
  other?: object;
  square?: boolean;
  color?: string;
  sx?: React.CSSProperties | object;
}

export const List: React.FC<ListProps>;

export const ListItem: React.FC<ListItemProps>;

export const ListItemButton: React.FC<ListItemProps>;
