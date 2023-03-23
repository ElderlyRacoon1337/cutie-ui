import clsx from 'clsx';
import React from 'react';
import styles from './Tabs.module.scss';

interface TabProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  other?: object;
}

const Tab: React.FC<TabProps> = ({ children, className, style, other }) => {
  return (
    <div
      className={clsx(styles.CuteTabPanel, className)}
      style={style}
      {...other}
    >
      {children}
    </div>
  );
};

export default Tab;
