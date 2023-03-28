import styled from '@emotion/styled';
import { useContext } from 'react';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import { jsx as _jsx } from 'react/jsx-runtime';
const StyledLink = styled.a`
  color: ${(props) => props._color};
  cursor: pointer;
  font-family: ${(props) => props.variables.baseFontFamily};
  font-size: ${(props) => props.variables.fontSizeMedium};
  &:hover {
    text-decoration: underline;
  }
  ${(props) => props.underlined && `text-decoration: underline;`}
`;
export const Link = ({
  children,
  href,
  className,
  style,
  onClick,
  underlined = false,
  other,
  color = 'link',
}) => {
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return /*#__PURE__*/ _jsx(StyledLink, {
    variables: variables,
    _color: color,
    underlined: underlined,
    href: href,
    onClick: onClick,
    className: className,
    style: style,
    ...other,
    children: children,
  });
};
