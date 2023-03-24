import clsx from 'clsx';
import React from 'react';
import styles from './Spinner.module.scss';

interface LoaderProps {
  size?: number | string;
  fatness?: number | string;
  style?: React.CSSProperties;
  color?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'success'
    | 'error'
    | 'text'
    | 'white'
    | 'black';
  other?: object;
  className?: string;
  circleDark?: boolean;
  circleLight?: boolean;
  duration?: number;
  variant?: 1 | 2 | 3;
}

const Loader: React.FC<LoaderProps> = ({
  size = '40px',
  color = 'text',
  fatness = 4,
  style,
  className,
  other,
  circleDark,
  circleLight,
  duration = 0.8,
  variant = 1,
}) => {
  return (
    <>
      {variant == 1 && (
        <div
          className={clsx(
            styles.CuteSpinner1,
            styles[`CuteSpinner1-${color}`],
            circleDark && styles['CuteSpinner1-circleDark'],
            circleLight && styles['CuteSpinner1-circleLight'],
            className
          )}
          {...other}
          style={{
            width: size,
            height: size,
            borderTopColor: `var(--${color == 'text' ? 'textPrimary' : color})`,
            borderWidth: `${fatness}px`,
            animationDuration: duration + 's',
            ...style,
          }}
        />
      )}
      {variant == 2 && (
        <div
          className={clsx(
            styles[`CuteSpinner2-${color}`],
            styles['CuteSpinner2'],
            className
          )}
          style={{ width: size, height: size, ...style }}
        >
          <div
            style={{
              width: size,
              height: size,
              borderWidth: `${fatness}px`,
            }}
          ></div>
          <div
            style={{
              width: size,
              height: size,
              borderWidth: `${fatness}px`,
            }}
          ></div>
          <div
            style={{
              width: size,
              height: size,
              borderWidth: `${fatness}px`,
            }}
          ></div>
          <div
            style={{
              width: size,
              height: size,
              borderWidth: `${fatness}px`,
            }}
          ></div>
        </div>
      )}
      {variant == 3 && (
        <div
          className={clsx(
            styles.CuteSpinner3,
            styles[`CuteSpinner3-${color}`],
            className
          )}
          style={style}
        >
          <div
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              marginRight: fatness + 'px',
              animationDuration: duration + 's',
            }}
          ></div>
          <div
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              marginRight: fatness + 'px',
              animationDuration: duration + 's',
            }}
          ></div>
          <div
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              marginRight: fatness + 'px',
              animationDuration: duration + 's',
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Loader;
