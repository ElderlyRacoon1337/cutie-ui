import clsx from 'clsx';
import styles from './LinearProgress.module.scss';

interface LinearProgressProps {
  height?: number | string;
  className?: string;
  value?: number | string;
  style?: React.CSSProperties;
  loader?: boolean;
  color?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'success'
    | 'error'
    | 'text'
    | 'white'
    | 'black';
  duration?: number | string;
  variant?: 1 | 2 | 3 | '1' | '2' | '3';
}

const LinearProgress: React.FC<LinearProgressProps> = ({
  value,
  className,
  height = 3,
  style,
  color = 'text',
  loader,
  duration = 1,
  variant,
}) => {
  return (
    <div
      className={clsx(
        styles.CuteProgress,
        loader && styles[`CuteProgress-loader${variant}`],
        styles[`CuteProgress-${color}`],
        loader && styles[`CuteProgress-loader`],
        className
      )}
      style={{ height, ...style }}
    >
      <div style={{ width: value + '%' }} />
      <div style={{ animationDuration: duration + 's' }}></div>
    </div>
  );
};

export default LinearProgress;
