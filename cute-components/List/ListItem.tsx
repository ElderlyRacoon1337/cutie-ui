import React from 'react';

interface ListItemProps {
  className?: string;
  children: any;
  sx?: React.CSSProperties;
  startIcon?: any;
  onClick?: any;
}

export const ListItem: React.FC<ListItemProps> = ({
  className,
  children,
  sx,
  startIcon,
  onClick,
}) => {
  return (
    <li
      onClick={onClick}
      className={`${className} listItem ${startIcon ? 'listItemIcon' : ''}`}
      style={sx}
    >
      {startIcon}
      {children}
    </li>
  );
};
