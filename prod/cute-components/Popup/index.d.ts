interface PopupProps {
  open: boolean;
  className?: string;
  onClose: (event: React.MouseEvent<any, MouseEvent>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  other?: object;
}
export const Popup: React.FC<PopupProps>;
