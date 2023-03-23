import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: any;
  value?: any;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  classNameForWrapper?: string;
  styleForWrapper?: React.CSSProperties;
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
  maxLength,
  other,
  styleForWrapper,
  button,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={clsx(
        styles.CuteInputWrapper,
        styles[`CuteInput-${color}`],
        styles[`CuteInput-${variant}`],
        styles[`CuteInput-${size}`],
        startIcon && !endIcon && styles['CuteInput-iconStart'],
        endIcon && !startIcon && styles['CuteInput-iconEnd'],
        startIcon && endIcon && styles['CuteInput-icons'],
        square && styles['CuteInput-square'],
        focused && [`CuteInput-focused`] &&
          styles[`CuteInput-${color}-focused`],
        classNameForWrapper
      )}
      style={styleForWrapper}
    >
      {label && focused && (
        <p className={styles['CuteInput-label']}>{placeholder}</p>
      )}
      <div className={styles['CuteInput-row']}>
        {startIcon}
        <input
          minLength={maxLength}
          maxLength={maxLength}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          autoFocus={autoFocus}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={clsx(styles.CuteInput, className)}
          placeholder={label && focused ? '' : placeholder}
          type={type}
          value={value}
          onChange={onChange}
          {...other}
          style={style}
        />
        {endIcon}
        {React.Children.map(button, (child) =>
          // @ts-ignore
          React.cloneElement(child, {
            color: color,
            size: size,
          })
        )}
      </div>
      {message && <p className={styles['CuteInput-message']}>{message}</p>}
    </div>
  );
};
