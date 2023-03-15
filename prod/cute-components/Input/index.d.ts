import React from 'react';

interface InputProps {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  startIcon?: any;
  type?: any;
  value?: any;
  onChange?: any;
  classNameForWrapper?: string;
}

export const Input: React.FC<InputProps>;
