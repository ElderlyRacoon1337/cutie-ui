import React from 'react';

export const List = ({ children, className, sx }) => {
  return (
    <ul className={`${className} list`} style={sx}>
      {children}
    </ul>
  );
};
