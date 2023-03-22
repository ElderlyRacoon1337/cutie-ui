interface LinkProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLElement>;
  underlined?: boolean;
  other?: object;
}

export const Link: React.FC<LinkProps>;
