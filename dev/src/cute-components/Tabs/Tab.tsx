import clsx from 'clsx';
import React from 'react';
import '../../cute-styles/index.scss';

interface TabProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ref?: any;
  other?: object;
}

const Tab: React.FC<TabProps> = ({
  children,
  className,
  style,
  ref,
  other,
}) => {
  return (
    <div
      ref={ref}
      className={clsx('CuteTabPanel', className)}
      style={style}
      {...other}
    >
      {children}
    </div>
  );
};

export default Tab;
