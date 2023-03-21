import clsx from 'clsx';
import React from 'react';
import './index.scss';

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
        'CuteListItem',
        active && 'CuteListItem-active',
        activeFilled && 'CuteListItem-activeFilled',
        startIcon && !endIcon && 'CuteListItem-iconStart',
        endIcon && !startIcon && 'CuteListItem-iconEnd',
        startIcon && endIcon && 'CuteListItem-icons',
        square && 'CuteListItem-square',
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
