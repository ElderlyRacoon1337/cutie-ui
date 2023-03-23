import clsx from 'clsx';
import React from 'react';
import styles from './List.module.scss';

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<any>) => void;
  active?: boolean;
  activeFilled?: boolean;
  other?: object;
  square?: boolean;
}

export const ListItem: React.FC<ListItemProps> = ({
  className,
  children,
  style,
  startIcon,
  onClick,
  active,
  endIcon,
  activeFilled,
  other,
  square,
}) => {
  return (
    <li
      onClick={onClick}
      className={clsx(
        styles.CuteListItem,
        active && styles['CuteListItem-active'],
        activeFilled && styles['CuteListItem-activeFilled'],
        startIcon && !endIcon && styles['CuteListItem-iconStart'],
        endIcon && !startIcon && styles['CuteListItem-iconEnd'],
        startIcon && endIcon && styles['CuteListItem-icons'],
        square && styles['CuteListItem-square'],
        className
      )}
      {...other}
      style={style}
    >
      {startIcon || endIcon ? (
        <>
          {startIcon}
          <div className={styles.CuteListItemChildren}>{children}</div>
          {endIcon}
        </>
      ) : (
        children
      )}
    </li>
  );
};
