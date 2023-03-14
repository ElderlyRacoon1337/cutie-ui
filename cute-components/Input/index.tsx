import React from 'react';

interface InputProps {
  variant?: 'base' | 'search';
  placeholder?: string;
  className?: string;
  sx?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({
  variant,
  placeholder,
  className,
  sx,
}) => {
  return (
    <>
      {variant == 'base' ? (
        <input
          style={sx}
          className={`input ${className}`}
          placeholder={placeholder}
        ></input>
      ) : (
        <div className="searchInput">
          <input
            style={sx}
            className={`input ${className}`}
            placeholder={placeholder}
          ></input>
        </div>
      )}
    </>
  );
};
