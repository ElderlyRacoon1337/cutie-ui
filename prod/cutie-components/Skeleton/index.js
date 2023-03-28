import styled from '@emotion/styled';
import { useContext } from 'react';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import { jsx as _jsx } from 'react/jsx-runtime';
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
`;
export const Skeleton = ({
  width,
  height,
  variant = 'square',
  className,
  style,
  other,
}) => {
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
  return /*#__PURE__*/ _jsx(StyledSkeleton, {
    variables: variables,
    variant: variant,
    _width: width,
    _height: height,
    className: className,
    style: style,
    ...other,
  });
};
