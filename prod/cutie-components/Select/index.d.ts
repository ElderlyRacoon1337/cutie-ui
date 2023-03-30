import React from 'react';
interface SelectProps {
  children: React.ReactNode;
  className?: string;
  sx?: React.CSSProperties | object;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onClick?: React.MouseEventHandler<HTMLSelectElement>;
}
export const Select: React.FC<SelectProps>;
