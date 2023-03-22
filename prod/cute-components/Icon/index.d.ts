interface IconProps {
  icon?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary' | 'neutral' | 'black' | 'white' | 'text';
  size?: 'large' | 'small' | 'medium';
  style?: React.CSSProperties;
  children?: React.ReactNode;
  other?: object;
  fontSize?: number | string;
}

export const Icon: React.FC<IconProps>;
