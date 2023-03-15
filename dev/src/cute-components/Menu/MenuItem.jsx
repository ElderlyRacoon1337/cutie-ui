import React from 'react';

export const MenuItem = ({ children, handleClose, className, sx, onClick }) => {
  return (
    <li
      onClick={() => {
        handleClose();
        onClick();
      }}
      className={`${className} menuItem`}
      style={sx}
    >
      {children}
    </li>
  );
};
