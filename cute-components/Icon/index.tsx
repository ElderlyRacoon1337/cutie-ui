import React, { MouseEventHandler } from 'react';

interface IconProps {
  svg: any;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary';
  size?: 'large' | 'small' | 'medium';
  sx?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ svg, className, size, color, sx }) => {
  return (
    <div className={`${color} ${size}`}>
      <div
        style={sx}
        className={`${className} ${'icon'}
      `}
      >
        {svg}
      </div>
    </div>
  );
};

export default Icon;
