import React from 'react';

interface InputProps {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  startIcon?: JSX.Element | SVGElement;
  type?: any;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  classNameForWrapper?: string;
}
export const Input: React.FC<InputProps>;
