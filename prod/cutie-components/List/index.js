import styled from '@emotion/styled';
import { useContext } from 'react';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
/** @jsxImportSource @emotion/react */
import { jsx as _jsx } from '@emotion/react/jsx-runtime';
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
export const List = ({ children, className, other, square, sx }) => {
  let theme = useContext(ThemeContext);
  const styleOverrides = theme.styleOverrides.list;
  return _jsx(StyledList, {
    styleOverrides: styleOverrides,
    square: square,
    className: className,
    ...other,
    css: sx,
    children: children,
  });
};
