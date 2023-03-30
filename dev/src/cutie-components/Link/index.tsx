import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */

interface LinkProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  sx?: React.CSSProperties | object;
  onClick?: React.MouseEventHandler<HTMLElement>;
  underlined?: boolean;
  other?: object;
  color?: string;
}

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

export const Link: React.FC<LinkProps> = ({
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

  return (
    <StyledLink
      styleOverrides={styleOverrides}
      variables={variables}
      _color={color}
      underlined={underlined}
      href={href}
      onClick={onClick}
      className={className}
      css={sx}
      {...other}
    >
      {children}
    </StyledLink>
  );
};
