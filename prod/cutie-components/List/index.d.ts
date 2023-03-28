import React from 'react';

interface ListProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  other?: object;
  square?: boolean;
}

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<any>) => void;
  active?: boolean;
  activeFilled?: boolean;
  other?: object;
  square?: boolean;
  color?: string;
}

export const List: React.FC<ListProps>;

export const ListItem: React.FC<ListItemProps>;

export const ListItemButton: React.FC<ListItemProps>;
