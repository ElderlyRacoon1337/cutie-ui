import React from 'react';

interface ListItemProps {
  className?: string;
  children: any;
  sx?: React.CSSProperties;
  startIcon?: any;
}

export const ListItem: React.FC<ListItemProps> = ({
  className,
  children,
  sx,
  startIcon,
}) => {
  return (
    <li
      className={`${className} listItem ${startIcon ? 'listItemIcon' : ''}`}
      style={sx}
    >
      {startIcon}
      {children}
    </li>
  );
};
