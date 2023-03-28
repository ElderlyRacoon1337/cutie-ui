import React from 'react';

interface AlertProps {
  children?: React.ReactNode;
  open: boolean;
  onClose?: any;
  className?: string;
  style?: React.CSSProperties;
  position?:
    | 'topRight'
    | 'topLeft'
    | 'bottomRight'
    | 'bottomLeft'
    | 'topCenter'
    | 'bottomCenter';
  color?: string;
  startIcon?: React.ReactNode;
  withioutButton?: boolean;
  duration?: number;
  other?: object;
}

export const Alert: React.FC<AlertProps>;
