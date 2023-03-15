import clsx from 'clsx';
import React from 'react';

interface ListProps {
  className?: string;
  children?: any;
  style?: React.CSSProperties;
}

export const List: React.FC<ListProps> = ({ children, className, style }) => {
  return (
    <ul className={clsx('list', className)} style={style}>
      {children}
    </ul>
  );
};
