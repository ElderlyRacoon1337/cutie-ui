import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
/** @jsxImportSource @emotion/react */

interface ListProps {
  className?: string;
  children?: React.ReactNode;
  other?: object;
  square?: boolean;
  sx?: React.CSSProperties | object;
}

const StyledList = styled.ul`
  list-style: 'none';
  margin: 0;
  padding: 0;

  ${(props) =>
    props.square &&
    `li {
      border-radius: 0;
    }`}

  ${(props) => props.styleOverrides};
`;

export const List: React.FC<ListProps> = ({
  children,
  className,
  other,
  square,
  sx,
}) => {
  let theme = useContext(ThemeContext);
  const styleOverrides = theme.styleOverrides.list;
  return (
    <StyledList
      styleOverrides={styleOverrides}
      square={square}
      className={className}
      {...other}
      css={sx}
    >
      {children}
    </StyledList>
  );
};
