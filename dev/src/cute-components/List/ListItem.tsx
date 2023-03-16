import clsx from 'clsx';
import React from 'react';

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<any>) => void;
  active?: boolean;
}

export const ListItem: React.FC<ListItemProps> = ({
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
