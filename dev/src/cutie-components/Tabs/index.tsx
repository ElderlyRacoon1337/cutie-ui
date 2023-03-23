import clsx from 'clsx';
import React from 'react';
import styles from './Tabs.module.scss';

interface TabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  children?: React.ReactNode;
  labels: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  other?: object;
  variant?: 'contained' | 'underlined';
  fullWidth?: boolean;
  rounded?: boolean;
  circle?: boolean;
  color?:
    | 'primary'
    | 'secondary'
    | 'black'
    | 'white'
    | 'neutral'
    | 'error'
    | 'success';
  size?: 'small' | 'medium' | 'large';
}

const Tabs: React.FC<TabsProps> = ({
  value,
  onChange,
  labels,
  children,
  className,
  variant = 'underlined',
  color = 'primary',
  size = 'medium',
  fullWidth,
  rounded,
  circle,
}: any) => {
  return (
    <div className="CuteTabs-wrapper">
      <div
        className={clsx(
          styles.CuteTabs,
          fullWidth && styles['CuteTabs-fullWidth'],
          className
        )}
      >
        {labels?.map((el: any, i: number) => (
          <div
            key={i}
            onClick={(e) => onChange(e, i + 1)}
            className={clsx(
              styles.CuteTab,
              i == value - 1 && styles[`CuteTab-active-${variant}-${color}`],
              rounded && styles['CuteTab-rounded'],
              circle && styles['CuteTab-circle'],
              styles[`CuteTabs-${size}`]
            )}
          >
            {el}
          </div>
        ))}
      </div>
      <div className={styles.CutePanels}>
        {/* @ts-ignore */}
        {Array.from(children)?.filter((el: any, i) => i + 1 == value)}
      </div>
    </div>
  );
};

export default Tabs;
