import clsx from 'clsx';
import React from 'react';

interface ListProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  ref?: any;
  other?: object;
}

export const List: React.FC<ListProps> = ({
  children,
  className,
  style,
  ref,
  other,
}) => {
  return (
    <ul
      ref={ref}
      className={clsx('CuteList', className)}
      {...other}
      style={style}
    >
      {children}
    </ul>
  );
};
