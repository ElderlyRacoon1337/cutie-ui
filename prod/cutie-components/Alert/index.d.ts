import React from 'react';

interface AlertProps {
  children?: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  className?: string;
  sx?: React.CSSProperties | object;
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
