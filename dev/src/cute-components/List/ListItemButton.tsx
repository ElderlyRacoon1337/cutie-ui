import clsx from 'clsx';
import React from 'react';

interface ListItemProps {
  className?: string;
  children: any;
  style?: React.CSSProperties;
  startIcon?: JSX.Element | SVGElement;
  onClick?: any;
  active?: boolean;
  endIcon?: JSX.Element | SVGElement;
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
    <li
      onClick={onClick}
      className={clsx(
        'listItemButton',
        active && 'listItemActive',
        startIcon && !endIcon && 'listItemIconStart',
        endIcon && !startIcon && 'listItemIconEnd',
        startIcon && endIcon && 'listItemIcons',
        className
      )}
      style={style}
    >
      {startIcon}
      {endIcon}
      {children}
    </li>
  );
};
