import clsx from 'clsx';
import React from 'react';

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  startIcon?: JSX.Element | SVGElement;
  onClick?: (event: React.MouseEvent<any>) => void;
  active?: boolean;
  endIcon?: React.ReactNode;
}

export const ListItemButton: React.FC<ListItemProps> = ({
  className,
  children,
  style,
  startIcon,
  onClick,
  active,
  endIcon,
}) => {
  return (
    // @ts-ignore
    <li
      onClick={onClick}
      className={clsx(
        'CuteListItem',
        'CuteListItemButton',
        active && 'CuteListItem-active',
        startIcon && !endIcon && 'CuteListItem-iconStart',
        endIcon && !startIcon && 'CuteListItem-iconEnd',
        startIcon && endIcon && 'CuteListItem-icons',
        className
      )}
      style={style}
    >
      {startIcon}
      <div className="CuteListItemChildren">{children}</div>
      {endIcon}
    </li>
  );
};
