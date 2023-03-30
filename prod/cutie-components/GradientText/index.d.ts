import React from 'react';

interface GradientTextProps {
  children?: React.ReactNode;
  firstColor: string;
  secondColor?: string;
  className?: string;
  sx?: React.CSSProperties | object;
  fontSize?: number | string;
  fontWeight?: number | string;
  rotate?: number | string;
  other?: object;
}
export const GradientText: React.FC<GradientTextProps>;
