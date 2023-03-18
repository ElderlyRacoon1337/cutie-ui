import clsx from 'clsx';
import React from 'react';
import '../../cute-styles/index.scss';

interface TabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  children?: React.ReactNode;
  labels: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ref?: any;
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
  ref,
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
        ref={ref}
        className={clsx(
          'CuteTabs',
          fullWidth && 'CuteTabs-fullWidth',
          className
        )}
      >
        {labels?.map((el: any, i: number) => (
          <div
            key={i}
            onClick={(e) => onChange(e, i + 1)}
            className={clsx(
              'CuteTab',
              i == value - 1 && `CuteTab-active-${variant}-${color}`,
              rounded && 'CuteTab-rounded',
              circle && 'CuteTab-circle',
              `CuteTabs-${size}`
            )}
          >
            {el}
          </div>
        ))}
      </div>
      <div className="CutePanels">
        {/* @ts-ignore */}
        {Array.from(children)?.filter((el: any, i) => i + 1 == value)}
      </div>
    </div>
  );
};

export default Tabs;
