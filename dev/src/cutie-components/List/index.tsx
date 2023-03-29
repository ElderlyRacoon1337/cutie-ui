import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';

interface ListProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  other?: object;
  square?: boolean;
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
  style,
  other,
  square,
}) => {
  const theme = useContext(ThemeContext);
  const styleOverrides = theme.styleOverrides.list;
  return (
    <StyledList
      styleOverrides={styleOverrides}
      square={square}
      className={className}
      {...other}
      style={style}
    >
      {children}
    </StyledList>
  );
};
