import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';

interface LinkProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
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
`;

const Link: React.FC<LinkProps> = ({
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

  return (
    <StyledLink
      variables={variables}
      _color={color}
      underlined={underlined}
      href={href}
      onClick={onClick}
      className={className}
      style={style}
      {...other}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
