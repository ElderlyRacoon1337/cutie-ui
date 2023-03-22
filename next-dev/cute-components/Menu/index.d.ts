interface MenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: (event: React.MouseEvent<any, MouseEvent>) => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  other?: object;
}
interface MenuItemProps {
  className?: string;
  onClose?: (event: React.MouseEvent<any, MouseEvent>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<any>) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  divider?: boolean;
  other?: object;
}

export const Menu: React.FC<MenuProps>;

export const MenuItem: React.FC<MenuItemProps>;
