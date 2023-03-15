import React from 'react';

interface InputProps {
  placeholder?: string;
  className?: string;
  sx?: React.CSSProperties;
  startIcon?: any;
  type?: any;
  value?: any;
  onChange?: any;
}

export const Input: React.FC<InputProps>;
