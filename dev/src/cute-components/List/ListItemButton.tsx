import clsx from 'clsx';
import React from 'react';

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  startIcon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<any>) => void;
  active?: boolean;
  endIcon?: React.ReactNode;
  activeFilled?: boolean;
  ref?: any;
  other?: object;
}

export const ListItemButton: React.FC<ListItemProps> = ({
  className,
  children,
  style,
  startIcon,
  onClick,
  active,
  endIcon,
  activeFilled,
  ref,
  other,
}) => {
  return (
    <li
      ref={ref}
      onClick={onClick}
      className={clsx(
        'CuteListItem',
        'CuteListItemButton',
        active && 'CuteListItem-active',
        activeFilled && 'CuteListItem-activeFilled',
        startIcon && !endIcon && 'CuteListItem-iconStart',
        endIcon && !startIcon && 'CuteListItem-iconEnd',
        startIcon && endIcon && 'CuteListItem-icons',
        className
      )}
      {...other}
      style={style}
    >
      {startIcon}
      <div className="CuteListItemChildren">{children}</div>
      {endIcon}
    </li>
  );
};
