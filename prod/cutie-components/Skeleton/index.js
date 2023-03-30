import styled from '@emotion/styled';
import { useContext } from 'react';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */
import { jsx as _jsx } from '@emotion/react/jsx-runtime';
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
export const Skeleton = ({
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
  return _jsx(StyledSkeleton, {
    styleOverrides: styleOverrides,
    variables: variables,
    variant: variant,
    _width: width,
    _height: height,
    className: className,
    css: sx,
    ...other,
  });
};
