interface LoaderProps {
  width?: number | string;
  fatness?: number | string;
  style?: React.CSSProperties;
  color?: 'primary' | 'secondary' | 'neutral' | 'text';
  other?: object;
  className?: string;
}

export const Loader: React.FC<LoaderProps>;
