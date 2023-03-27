import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';

interface IconProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: string;
  size?: 'large' | 'small' | 'medium';
  style?: React.CSSProperties;
  children?: React.ReactNode;
  other?: object;
  fontSize?: string | number;
}

export const Icon: React.FC<IconProps> = ({
  className,
  size = 'medium',
  color,
  style,
  onClick,
  children,
  other,
  fontSize = '20px',
}) => {
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return (
    <>
      {React.Children.map(children, (child) =>
        // @ts-ignore
        React.cloneElement(child, {
          className: className,
          style: {
            fontSize: fontSize,
            width: '1em',
            height: '1em',
            color: color,
            ...style,
          },
          ...other,
          onClick: onClick,
        })
      )}
    </>
  );
};
