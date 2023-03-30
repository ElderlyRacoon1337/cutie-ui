import React from 'react';

interface TooltipProps {
  anchorEl: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children?: React.ReactNode;
  className?: string;
  sx?: React.CSSProperties | object;
}
export const Tooltip: React.FC<TooltipProps>;
