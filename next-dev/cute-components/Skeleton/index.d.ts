interface SkeletonProps {
  width: number | string;
  height: number | string;
  variant?: 'square' | 'rounded' | 'circle';
  className?: string;
  style?: React.CSSProperties;
  other?: object;
}
export const Skeleton: React.FC<SkeletonProps>;
