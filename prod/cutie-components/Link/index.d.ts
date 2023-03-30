import React from 'react';

interface LinkProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  sx?: React.CSSProperties | object;
  onClick?: React.MouseEventHandler<HTMLElement>;
  underlined?: boolean;
  other?: object;
  color?: string;
}
export const Link: React.FC<LinkProps>;
