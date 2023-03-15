import React from 'react';

export const Input = ({
  placeholder,
  className,
  sx,
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
