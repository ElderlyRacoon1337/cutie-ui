import styled from '@emotion/styled';
import { useContext } from 'react';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */
import { jsx as _jsx } from '@emotion/react/jsx-runtime';
const StyledLink = styled.a`
  color: ${(props) => props._color};
  cursor: pointer;
  font-family: ${(props) => props.variables.baseFontFamily};
  font-size: ${(props) => props.variables.fontSizeMedium};
  &:hover {
    text-decoration: underline;
  }

  ${(props) => props.underlined && `text-decoration: underline;`}
  ${(props) => props.styleOverrides};
`;
export const Link = ({
  children,
  href,
  className,
  sx,
  onClick,
  underlined = false,
  other,
  color = 'link',
}) => {
  const theme = useContext(ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }
  const styleOverrides = theme.styleOverrides.link;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return _jsx(StyledLink, {
    styleOverrides: styleOverrides,
    variables: variables,
    _color: color,
    underlined: underlined,
    href: href,
    onClick: onClick,
    className: className,
    css: sx,
    ...other,
    children: children,
  });
};
