interface IconButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  icon?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary' | 'neutral' | 'white' | 'black' | 'text';
  size?: 'large' | 'small' | 'medium';
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  children?: React.ReactNode;
  other?: object;
}
export const IconButton: React.FC<IconButtonProps>;
