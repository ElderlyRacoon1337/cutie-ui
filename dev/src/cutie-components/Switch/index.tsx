import clsx from 'clsx';
import React from 'react';
import styles from './Switch.module.scss';

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
        minHeight:
          size == 'small' ? '18px' : size == 'medium' ? '20px' : '30px',
        display: 'flex',
        alignItems: 'center',
        ...style,
      }}
    >
      <label>
        <div
          className={clsx(
            styles[`CuteSwitch-wrapper`],
            styles[`CuteSwitch-${size}`],
            styles[`CuteSwitch-${color}`],
            disabled && styles['CuteSwitch-disabled'],
            !checked && styles['CuteSwitch-unchecked']
          )}
        >
          <input
            onChange={onChange}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            {...other}
          />
          <span className={styles.CuteSwitch}>
            <span className={styles['CuteSwitch-handle']} />
          </span>
        </div>
      </label>
    </div>
  );
};

export default Switch;
