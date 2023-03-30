import React from 'react';
/** @jsxImportSource @emotion/react */

interface TabProps {
  children?: React.ReactNode;
  className?: string;
  sx?: React.CSSProperties | object;
  other?: object;
}

export const Tab: React.FC<TabProps> = ({ children, className, other, sx }) => {
  return (
    <div className={className} css={sx} {...other}>
      {children}
    </div>
  );
};
