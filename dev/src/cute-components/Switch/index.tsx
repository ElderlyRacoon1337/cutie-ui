import clsx from 'clsx';
import React from 'react';
import './index.scss';

interface SwitchProps {
  checked?: boolean;
  size?: 'medium' | 'small' | 'large';
  color?:
    | 'primary'
    | 'secondary'
    | 'black'
    | 'white'
    | 'neutral'
    | 'error'
    | 'success'
    | 'apple';
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  other?: object;
  onChange?: any;
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  size = 'medium',
  disabled = false,
  color = 'primary',
  onChange,
  other,
  className,
  style,
}) => {
  return (
    <div
      className={className}
      style={{
        minHeight: '30px',
        display: 'flex',
        alignItems: 'center',
        ...style,
      }}
    >
      <form>
        <label>
          <div
            className={clsx(
              `CuteSwitch-wrapper`,
              `CuteSwitch-${size}`,
              `CuteSwitch-${color}`,
              disabled && 'CuteSwitch-disabled',
              !checked && 'CuteSwitch-unchecked'
            )}
          >
            <input
              onChange={onChange}
              type="checkbox"
              checked={checked}
              disabled={disabled}
              {...other}
            />
            <span className={`CuteSwitch`}>
              <span className="CuteSwitch-handle" />
            </span>
          </div>
        </label>
      </form>
    </div>
  );
};

export default Switch;
