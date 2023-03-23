import clsx from 'clsx';
import styles from './Progress.module.scss';

interface ProgressProps {
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
}

const Progress: React.FC<ProgressProps> = ({
  value,
  className,
  height = 3,
  style,
  color,
  loader,
  duration = 1,
}) => {
  return (
    <div
      className={clsx(
        styles.CuteProgress,
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

export default Progress;
