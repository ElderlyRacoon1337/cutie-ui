import React from 'react';
interface RadioProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  currentValue: string;
  value: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  width?: string | number;
  disabled?: boolean;
  label?: string;
  className?: string;
  other?: object;
  sx?: React.CSSProperties | object;
}
export const Radio: React.FC<RadioProps>;
