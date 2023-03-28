import styled from '@emotion/styled';
import { jsx as _jsx } from 'react/jsx-runtime';
const StyledList = styled.ul`
  list-style: 'none';
  margin: 0;
  padding: 0;

  ${(props) =>
    props.square &&
    `li {
      border-radius: 0;
    }`}
`;
export const List = ({ children, className, style, other, square }) => {
  return /*#__PURE__*/ _jsx(StyledList, {
    square: square,
    className: className,
    ...other,
    style: style,
    children: children,
  });
};
