import React from 'react';
interface PopupProps {
  open: boolean;
  className?: string;
  onClose: (event: React.MouseEvent<any, MouseEvent>) => void;
  children?: React.ReactNode;
  sx?: React.CSSProperties | object;
  other?: object;
}
export const Popup: React.FC<PopupProps>;
