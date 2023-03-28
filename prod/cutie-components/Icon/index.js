import React, { useContext } from 'react';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import { Fragment as _Fragment } from 'react/jsx-runtime';
import { jsx as _jsx } from 'react/jsx-runtime';
export const Icon = ({
  className,
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
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: React.Children.map(children, (child) =>
      /*#__PURE__*/ React.cloneElement(child, {
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
    ),
  });
};
