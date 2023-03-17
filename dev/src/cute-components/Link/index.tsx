import clsx from 'clsx';
import React from 'react';

interface LinkProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLElement>;
  underlined?: boolean;
  ref?: any;
  other?: object;
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  className,
  style,
  onClick,
  underlined = false,
  ref,
  other,
}) => {
  return (
    <a
      ref={ref}
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
