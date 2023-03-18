import clsx from 'clsx';
import React from 'react';
import '../../cute-styles/index.scss';

interface MenuItemProps {
  className?: string;
  onClose?: (event: React.MouseEvent<any, MouseEvent>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<any>) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  divider?: boolean;
  ref?: any;
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
  ref,
  other,
}) => {
  return (
    // @ts-ignore
    <li
      ref={ref}
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
        divider && 'CuteMenuItem-divider',
        className
      )}
      {...other}
      style={style}
    >
      {startIcon}
      <div className="CuteMenuItemChildren">{children}</div>
      {endIcon}
    </li>
  );
};
