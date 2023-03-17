import clsx from 'clsx';
import React, { useState } from 'react';

interface InputProps {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: any;
  value?: any;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  classNameForWrapper?: string;
  styleForWrapper?: React.CSSProperties;
  ref?: any;

  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'neutral' | 'error' | 'success';
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

export const Input: React.FC<InputProps> = ({
  placeholder,
  className,
  style,
  type,
  value,
  onChange,
  classNameForWrapper,
  color = 'primary',
  variant = 'outlined',
  size = 'medium',
  square = false,
  label,
  startIcon,
  endIcon,
  message,
  autoFocus,
  defaultValue,
  autoComplete,
  ref,
  maxLength,
  other,
  styleForWrapper,
  button,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={clsx(
        'CuteInputWrapper',
        `CuteInput-${color}`,
        `CuteInput-${variant}`,
        `CuteInput-${size}`,
        startIcon && !endIcon && 'CuteInput-iconStart',
        endIcon && !startIcon && 'CuteInput-iconEnd',
        startIcon && endIcon && 'CuteInput-icons',
        square && 'CuteInput-square',
        focused && `CuteInput-focused CuteInput-${color}-focused`,
        classNameForWrapper
      )}
      style={styleForWrapper}
    >
      {label && focused && <p className="CuteInput-label">{placeholder}</p>}
      <div className="CuteInput-row">
        {startIcon}
        <input
          minLength={maxLength}
          maxLength={maxLength}
          ref={ref}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          autoFocus={autoFocus}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={clsx('CuteInput', className)}
          placeholder={label && focused ? '' : placeholder}
          type={type}
          value={value}
          onChange={onChange}
          {...other}
          style={style}
        />
        {endIcon}
        {button}
      </div>
      {message && <p className="CuteInput-message">{message}</p>}
    </div>
  );
};
