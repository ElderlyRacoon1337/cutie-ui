import clsx from 'clsx';
import React from 'react';
import styles from './Menu.module.scss';

interface MenuItemProps {
  className?: string;
  onClose?: (event: React.MouseEvent<any, MouseEvent>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<any>) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  divider?: boolean;
  other?: object;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  onClose,
  className,
  style,
  onClick,
  startIcon,
  endIcon,
  divider,
  other,
}) => {
  return (
    <li
      onClick={
        onClick
          ? (e) => {
              onClick(e);
              onClose && onClose(e);
            }
          : onClose
      }
      className={clsx(
        styles.CuteMenuItem,
        startIcon && !endIcon && styles['CuteMenuItem-iconStart'],
        endIcon && !startIcon && styles['CuteMenuItem-iconEnd'],
        startIcon && endIcon && styles['CuteMenuItem-icons'],
        divider && styles['CuteMenuItem-divider'],
        className
      )}
      {...other}
      style={style}
    >
      {startIcon || endIcon ? (
        <>
          {startIcon}
          <div className={styles.CuteMenuItemChildren}>{children}</div>
          {endIcon}
        </>
      ) : (
        children
      )}
    </li>
  );
};
