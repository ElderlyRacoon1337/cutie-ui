import React from 'react';

interface TabProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  other?: object;
}

const Tab: React.FC<TabProps> = ({ children, className, style, other }) => {
  return (
    <div className={className} style={style} {...other}>
      {children}
    </div>
  );
};

export default Tab;
