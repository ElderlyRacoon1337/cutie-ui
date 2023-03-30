import React from 'react';

interface LinearProgressProps {
  height?: number | string;
  className?: string;
  value?: number | string;
  sx?: React.CSSProperties | object;
  loader?: boolean;
  color?: string;
  duration?: number | string;
  variant?: 1 | 2 | 3;
}
export const LinearProgress: React.FC<LinearProgressProps>;
