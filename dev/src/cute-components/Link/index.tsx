import clsx from 'clsx';
import React from 'react';
import './index.scss';

interface LinkProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLElement>;
  underlined?: boolean;
  other?: object;
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  className,
  style,
  onClick,
  underlined = false,
  other,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={clsx(
        'CuteLink',
        underlined && 'CuteLink-underlined',
        className
      )}
      {...other}
      style={style}
    >
      {children}
    </a>
  );
};

export default Link;
