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

export const Input: React.FC<InputProps> = ({
  placeholder,
  className,
  sx,
  svg,
  type,
  value,
  onChange,
  startIcon,
}) => {
  return (
    <>
      {startIcon ? (
        <div className="searchInput">
          {startIcon}
          <input
            className={`input ${className}`}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            style={sx}
          />
        </div>
      ) : (
        <input
          className={`input ${className}`}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          style={sx}
        />
      )}
    </>
  );
};
