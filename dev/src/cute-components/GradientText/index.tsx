import clsx from 'clsx';
import React from 'react';

interface GradientTextProps {
  children?: React.ReactNode;
  firstColor: string;
  secondColor?: string;
  className?: string;
  style?: React.CSSProperties;
  fontSize?: number | string;
  fontWeight?: number | string;
  rotate?: number | string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  firstColor,
  secondColor,
  className,
  style,
  fontSize,
  fontWeight,
  rotate = '90',
}) => {
  return (
    <p
      className={clsx('CuteGradientText', className)}
      style={{
        background: `linear-gradient(${rotate}deg, ${firstColor}, ${secondColor})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: fontSize + 'px',
        fontWeight: fontWeight,

        ...style,
      }}
    >
      {children}
    </p>
  );
};

export default GradientText;
