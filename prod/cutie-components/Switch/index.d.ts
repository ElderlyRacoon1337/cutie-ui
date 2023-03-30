import React from 'react';

interface SwitchProps {
  checked?: boolean;
  size?: 'medium' | 'small' | 'large';
  color?: string;
  disabled?: boolean;
  className?: string;
  sx?: React.CSSProperties | object;
  other?: object;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
}
export const Switch: React.FC<SwitchProps>;
