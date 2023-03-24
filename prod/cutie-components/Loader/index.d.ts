interface LoaderProps {
  size?: number | string;
  fatness?: number | string;
  style?: React.CSSProperties;
  color?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'success'
    | 'error'
    | 'text'
    | 'white'
    | 'black';
  other?: object;
  className?: string;
  circleDark?: boolean;
  circleLight?: boolean;
  duration?: number;
  variant?: 1 | 2 | 3;
}

export const Loader: React.FC<LoaderProps>;
