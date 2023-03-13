import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  children: any;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  color?: 'primary' | 'secondary';
  size?: 'large' | 'small' | 'medium';
  startIcon?: any;
  sx?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className,
  onClick,
  color,
  size,
  startIcon,
  sx,
}) => {
  return (
    <div className={`${color} ${size}`}>
      <button
        onClick={onClick}
        className={`${className} ${
          variant == 'outlined'
            ? 'buttonOutlined'
            : variant == 'contained'
            ? 'buttonContained'
            : 'buttonText'
        } ${color}`}
        style={sx}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
