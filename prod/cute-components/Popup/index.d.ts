import React from 'react';

interface PopupProps {
  variant?: 'base' | 'search';
  open: boolean;
  className?: string;
  onClose: any;
  children?: any;
  style?: React.CSSProperties;
}

export const Popup: React.FC<PopupProps>;
