import React from 'react';

interface SwitchProps {
  checked?: boolean;
  size?: 'medium' | 'small' | 'large';
  color?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  other?: object;
  onChange?: any;
}

export const Switch: React.FC<SwitchProps>;
