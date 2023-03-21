import clsx from 'clsx';
import React from 'react';
import './index.scss';

interface ListProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  other?: object;
  square?: boolean;
}

export const List: React.FC<ListProps> = ({
  children,
  className,
  style,
  other,
  square,
}) => {
  return (
    <ul
      className={clsx('CuteList', square && 'CuteList-square', className)}
      {...other}
      style={style}
    >
      {children}
    </ul>
  );
};
