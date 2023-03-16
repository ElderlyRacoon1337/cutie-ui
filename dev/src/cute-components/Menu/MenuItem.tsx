import clsx from 'clsx';
import React from 'react';

interface MenuItemProps {
  className?: string;
  onClose?: (event: React.MouseEvent<any, MouseEvent>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<any>) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  onClose,
  className,
  style,
  onClick,
  startIcon,
  endIcon,
}) => {
  return (
    // @ts-ignore
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
        'CuteMenuItem',
        startIcon && !endIcon && 'CuteMenuItem-iconStart',
        endIcon && !startIcon && 'CuteMenuItem-iconEnd',
        startIcon && endIcon && 'CuteMenuItem-icons',
        className
      )}
      style={style}
    >
      {startIcon}
      <div className="CuteMenuItemChildren">{children}</div>
      {endIcon}
    </li>
  );
};
