import clsx from 'clsx';
import React from 'react';

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
    | 'success';
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ref?: any;
  other?: object;
  onChange?: (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => void;
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  size = 'medium',
  disabled = false,
  color = 'primary',
  onChange,
}) => {
  return (
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
          />
          <span className={`CuteSwitch`}>
            <span className="CuteSwitch-handle" />
          </span>
        </div>
      </label>
    </form>
  );
};

export default Switch;
