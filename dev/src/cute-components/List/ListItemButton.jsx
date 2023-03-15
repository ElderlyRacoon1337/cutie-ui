import React from 'react';

export const ListItemButton = ({
  className,
  children,
  sx,
  startIcon,
  onClick,
}) => {
  return (
    <li
      onClick={onClick}
      className={`${className} listItemButton ${
        startIcon ? 'listItemIcon' : ''
      }`}
      style={sx}
    >
      {startIcon}
      {children}
    </li>
  );
};
