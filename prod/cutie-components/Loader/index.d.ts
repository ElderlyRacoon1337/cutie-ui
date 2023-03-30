interface LoaderProps {
  size?: number | string;
  fatness?: number | string;
  sx?: React.CSSProperties | object;
  color?: string;
  other?: object;
  className?: string;
  circleDark?: boolean;
  circleLight?: boolean;
  duration?: number;
  variant?: 1 | 2 | 3;
}
export const Loader: React.FC<LoaderProps>;
