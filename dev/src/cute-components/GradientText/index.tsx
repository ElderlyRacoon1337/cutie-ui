import clsx from 'clsx';
import React from 'react';
import styles from './GradientText.module.scss';

interface GradientTextProps {
  children?: React.ReactNode;
  firstColor: string;
  secondColor?: string;
  className?: string;
  style?: React.CSSProperties;
  fontSize?: number | string;
  fontWeight?: number | string;
  rotate?: number | string;
  other?: object;
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
  other,
}) => {
  return (
    <p
      className={clsx(className)}
      style={{
        background: `linear-gradient(${rotate}deg, ${firstColor}, ${secondColor})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: fontSize + 'px',
        fontWeight: fontWeight,
        ...style,
      }}
      {...other}
    >
      {children}
    </p>
  );
};

export default GradientText;
