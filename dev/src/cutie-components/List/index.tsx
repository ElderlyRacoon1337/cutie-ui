import clsx from 'clsx';
import React from 'react';
import styles from './List.module.scss';

interface ListProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  other?: object;
  square?: boolean;
  color?: 'primary' | 'secondary' | 'neutral';
}

export const List: React.FC<ListProps> = ({
  children,
  className,
  style,
  other,
  square,
  color,
}) => {
  return (
    <ul
      className={clsx(
        styles.CuteList,
        styles[`CuteList-${color}`],
        square && styles['CuteList-square'],
        className
      )}
      {...other}
      style={style}
    >
      {children}
    </ul>
  );
};
