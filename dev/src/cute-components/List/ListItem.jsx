import React from 'react';

export const ListItem = ({ className, children, sx, startIcon, onClick }) => {
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
