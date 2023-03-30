import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */

interface IconProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: string;
  sx?: React.CSSProperties | object;
  children?: React.ReactNode;
  other?: object;
  fontSize?: string | number;
}

export const Icon: React.FC<IconProps> = ({
  className,
  color,
  sx,
  onClick,
  children,
  other,
  fontSize,
}) => {
  const theme = useContext(ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          className: className,
          style: {
            fontSize: fontSize,
            width: '1em',
            height: '1em',
            color: color,
          },
          css: sx,
          ...other,
          onClick: onClick,
        })
      )}
    </>
  );
};
