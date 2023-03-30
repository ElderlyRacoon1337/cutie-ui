import React, { useContext } from 'react';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */
import { Fragment as _Fragment } from '@emotion/react/jsx-runtime';
import { jsx as _jsx } from '@emotion/react/jsx-runtime';
export const Icon = ({
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
  return _jsx(_Fragment, {
    children: React.Children.map(children, (child) =>
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
    ),
  });
};
