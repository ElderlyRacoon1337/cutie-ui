import React from 'react';

interface PopupProps {
  variant?: 'base' | 'search';
  open: boolean;
  className?: string;
  handleClose: any;
  children?: any;
  sx?: React.CSSProperties;
}

export const Popup: React.FC<PopupProps>;
