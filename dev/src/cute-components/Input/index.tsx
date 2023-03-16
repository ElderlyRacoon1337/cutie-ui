import clsx from 'clsx';
import React from 'react';

interface InputProps {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  startIcon?: React.ReactNode;
  type?: any;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
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
        <div
          className={clsx('CuteSearchInput', classNameForWrapper)}
          style={style}
        >
          {startIcon}
          <input
            className={clsx('CuteInput', className)}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
          />
        </div>
      ) : (
        <input
          className={clsx('CuteInput', className)}
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
