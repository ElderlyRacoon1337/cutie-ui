import React from 'react';

interface ListProps {
  className?: string;
  children?: any;
  sx?: React.CSSProperties;
}

export const List: React.FC<ListProps> = ({ children, className, sx }) => {
  return (
    <ul className={`${className} list`} style={sx}>
      {children}
    </ul>
  );
};
