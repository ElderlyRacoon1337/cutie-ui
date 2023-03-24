import clsx from 'clsx';
import React from 'react';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
  width: number | string;
  height: number | string;
  variant?: 'square' | 'rounded' | 'circle';
  className?: string;
  style?: React.CSSProperties;
  other?: object;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  variant = 'square',
  className,
  style,
  other,
}) => {
  return (
    <div
      className={clsx(
        styles.CuteSkeleton,
        styles[`CuteSkeleton-${variant}`],
        className
      )}
      style={{
        width: width + 'px',
        height: height + 'px',
        ...style,
      }}
      {...other}
    />
  );
};

export default Skeleton;
