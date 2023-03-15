import clsx from 'clsx';
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

export const Input: React.FC<InputProps> = ({
  placeholder,
  className,
  style,
  type,
  value,
  onChange,
  startIcon,
  classNameForWrapper,
}) => {
  return (
    <>
      {startIcon ? (
        <div className={clsx('searchInput', classNameForWrapper)} style={style}>
          {startIcon}
          <input
            className={clsx('input', className)}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
          />
        </div>
      ) : (
        <input
          className={clsx('input', className)}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          style={style}
        />
      )}
    </>
  );
};
