import React from 'react';

interface CheckboxProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  sx?: React.CSSProperties | object;
  className?: string;
  other?: object;
  width?: string;
  disabled?: boolean;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  label?: string;
}
export const Checkbox: React.FC<CheckboxProps>;
