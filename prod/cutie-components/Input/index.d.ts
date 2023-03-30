import React from 'react';
interface InputProps {
  placeholder?: string;
  className?: string;
  sx?: React.CSSProperties | object;
  type?: any;
  value?: any;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  square?: boolean;
  variant?: 'filled' | 'outlined' | 'underlined' | 'basic';
  message?: string;
  label?: boolean;
  autoFocus?: boolean;
  defaultValue?: any;
  autoComplete?: string;
  minLength?: number;
  maxLength?: number;
  other?: object;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  button?: React.ReactNode;
}

export const Input: React.FC<InputProps>;
