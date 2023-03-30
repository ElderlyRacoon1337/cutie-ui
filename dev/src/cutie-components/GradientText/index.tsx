import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */

interface GradientTextProps {
  children?: React.ReactNode;
  firstColor: string;
  secondColor?: string;
  className?: string;
  sx?: React.CSSProperties | object;
  fontSize?: number | string;
  fontWeight?: number | string;
  rotate?: number | string;
  other?: object;
}

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

  ${(props) => props.styleOverrides};
`;

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  firstColor,
  secondColor,
  className,
  sx,
  fontSize,
  fontWeight,
  rotate = '90',
  other,
}) => {
  const theme = useContext(ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }
  const styleOverrides = theme.styleOverrides.gradientText;
  if (Object.keys(variables).includes(firstColor)) {
    firstColor = variables[firstColor];
  }
  if (Object.keys(variables).includes(secondColor)) {
    secondColor = variables[secondColor];
  }

  return (
    <StyledGradientText
      styleOverrides={styleOverrides}
      _fontSize={fontSize}
      variables={variables}
      firstColor={firstColor}
      _fontWeight={fontWeight}
      _rotate={rotate}
      secondColor={secondColor}
      className={className}
      css={sx}
      {...other}
    >
      {children}
    </StyledGradientText>
  );
};
