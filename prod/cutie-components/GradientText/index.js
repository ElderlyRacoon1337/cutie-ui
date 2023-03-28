import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import { jsx as _jsx } from 'react/jsx-runtime';
const StyledGradientText = styled.p`
  background: linear-gradient(
    ${(props) => props._rotate}deg,
    ${(props) => props.firstColor},
    ${(props) => props.secondColor}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  font-size: ${(props) => props._fontSize};
  font-weight: ${(props) => props._fontWeight};
  font-family: ${(props) => props.variables.baseFontFamily};
`;
export const GradientText = ({
  children,
  firstColor,
  secondColor,
  className,
  style,
  fontSize,
  fontWeight,
  rotate = '90',
  other,
}) => {
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
  if (Object.keys(variables).includes(firstColor)) {
    firstColor = variables[firstColor];
  }
  if (Object.keys(variables).includes(secondColor)) {
    secondColor = variables[secondColor];
  }
  return /*#__PURE__*/ _jsx(StyledGradientText, {
    _fontSize: fontSize,
    variables: variables,
    firstColor: firstColor,
    _fontWeight: fontWeight,
    _rotate: rotate,
    secondColor: secondColor,
    className: className,
    style: style,
    ...other,
    children: children,
  });
};
