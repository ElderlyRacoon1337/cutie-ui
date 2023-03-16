import clsx from 'clsx';
import React from 'react';

interface ListProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const List: React.FC<ListProps> = ({ children, className, style }) => {
  return (
    <ul className={clsx('CuteList', className)} style={style}>
      {children}
    </ul>
  );
};
