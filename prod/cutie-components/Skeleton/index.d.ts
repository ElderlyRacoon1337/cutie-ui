import React from 'react';

interface SkeletonProps {
  width: number | string;
  height: number | string;
  variant?: 'square' | 'rounded' | 'circle';
  className?: string;
  other?: object;
  sx?: React.CSSProperties | object;
}
export const Skeleton: React.FC<SkeletonProps>;
