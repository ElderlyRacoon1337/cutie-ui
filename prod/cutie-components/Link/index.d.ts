import React from 'react';

interface LinkProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLElement>;
  underlined?: boolean;
  other?: object;
  color?: string;
}

export const Link: React.FC<LinkProps>;
