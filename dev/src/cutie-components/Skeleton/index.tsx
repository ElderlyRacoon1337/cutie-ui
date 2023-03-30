import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */

interface SkeletonProps {
  width: number | string;
  height: number | string;
  variant?: 'square' | 'rounded' | 'circle';
  className?: string;
  other?: object;
  sx?: React.CSSProperties | object;
}

const StyledSkeleton = styled.div`
  -webkit-animation: toggle 0.5s infinite;
  animation: toggle 0.5s infinite;
  -webkit-animation-duration: 1;
  animation-duration: 1;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;

  width: ${(props) => props._width};
  height: ${(props) => props._height};

  ${(props) => props.variant == 'square' && `border-radius: 0px;`}
  ${(props) =>
    props.variant == 'rounded' &&
    `border-radius: ${props.variables.baseBorderRadius};`}
  ${(props) =>
    props.variant == 'circle' &&
    `border-radius: 50%;
  height: auto !important;
  aspect-ratio: 1;
  `}

  @-webkit-keyframes toggle {
    0% {
      background: ${(props) => props.variables.skeletonDark};
    }
    100% {
      background: ${(props) => props.variables.skeletonLight};
    }
  }

  @keyframes toggle {
    0% {
      background: ${(props) => props.variables.skeletonDark};
    }
    100% {
      background: ${(props) => props.variables.skeletonLight};
    }
  }

  ${(props) => props.styleOverrides};
`;

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  variant = 'square',
  className,
  sx,
  other,
}) => {
  const theme = useContext(ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }
  const styleOverrides = theme.styleOverrides.skeleton;

  return (
    <StyledSkeleton
      styleOverrides={styleOverrides}
      variables={variables}
      variant={variant}
      _width={width}
      _height={height}
      className={className}
      css={sx}
      {...other}
    />
  );
};
