import clsx from 'clsx';
import React from 'react';
import '../../cute-styles/index.scss';

interface SkeletonProps {
  width: number | string;
  height: number | string;
  variant?: 'square' | 'rounded' | 'circle';
  className?: string;
  style?: React.CSSProperties;
  ref?: any;
  other?: object;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  variant = 'square',
  className,
  style,
  ref,
  other,
}) => {
  return (
    <div
      className={clsx('CuteSkeleton', `CuteSkeleton-${variant}`, className)}
      ref={ref}
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
