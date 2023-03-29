import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';

interface LoaderProps {
  size?: number | string;
  fatness?: number | string;
  style?: React.CSSProperties;
  color?: string;
  other?: object;
  className?: string;
  circleDark?: boolean;
  circleLight?: boolean;
  duration?: number;
  variant?: 1 | 2 | 3;
}

const StyledSpinner1 = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-top: 3px solid ${(props) => props.variables.textPrimary};
  border-radius: 50%;
  aspect-ratio: 1 !important;
  -webkit-animation: CuteSpinner1 0.8s linear infinite;
  animation: CuteSpinner1 0.8s linear infinite;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-width: ${(props) => props.fatness};
  animation-duration: ${(props) => props.duration}s;

  ${(props) =>
    props.circleLight &&
    `border-bottom-color: rgba(0, 0, 0, 0.1) !important;
    border-left-color: rgba(0, 0, 0, 0.1) !important;
    border-right-color: rgba(0, 0, 0, 0.1) !important;`}

  ${(props) =>
    props.circleDark &&
    `border-bottom-color: rgba(255, 255, 255, 0.1) !important;
  border-left-color: rgba(255, 255, 255, 0.1) !important;
  border-right-color: rgba(255, 255, 255, 0.1) !important;`}

  @-webkit-keyframes CuteSpinner1 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes CuteSpinner1 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  ${(props) =>
    props._mode == 'dark' && `border-color: rgba(255, 255, 255, 0.1);`}

  border-top-color: ${(props) => props._color};

  ${(props) => props.styleOverrides.loader1};
`;

const StyledSpinner2 = styled.div`
  border: 3px solid transparent;
  border-top: 3px solid ${(props) => props.variables.textPrimary};
  border-bottom: 3px solid ${(props) => props.variables.textPrimary};
  border-radius: 50%;
  aspect-ratio: 1 !important;
  -webkit-animation: CuteSpinner1 0.8s linear infinite;
  animation: CuteSpinner1 0.8s linear infinite;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-width: ${(props) => props.fatness};
  animation-duration: ${(props) => props.duration}s;

  @-webkit-keyframes CuteSpinner1 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes CuteSpinner1 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  border-top-color: ${(props) => props._color};
  border-bottom-color: ${(props) => props._color};

  ${(props) => props.styleOverrides.loader1};
`;

const StyledSpinner3 = styled.div`
  display: flex;
  align-items: center;

  & > div {
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: CuteSpinner3 1.4s infinite ease-in-out both;
    animation: CuteSpinner3 1.4s infinite ease-in-out both;
    background-color: ${(props) => props._color};
    animation-duration: ${(props) => props.duration};
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    margin-right: ${(props) => props.fatness}px;
  }
  div:nth-of-type(1) {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  div:nth-of-type(2) {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes CuteSpinner3 {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes CuteSpinner3 {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  ${(props) => props.styleOverrides.loader3};
`;

export const Loader: React.FC<LoaderProps> = ({
  size = '40px',
  color = 'primary',
  fatness = 4,
  style,
  className,
  other,
  circleDark,
  circleLight,
  duration = 0.8,
  variant = 1,
}) => {
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
  const mode = theme.theme;
  const styleOverrides = theme.styleOverrides;

  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }

  return (
    <>
      {variant == 1 && (
        <StyledSpinner1
          styleOverrides={styleOverrides}
          variables={variables}
          _mode={mode}
          _color={color}
          circleLight={circleLight}
          circleDark={circleDark}
          duration={duration}
          className={className}
          fatness={fatness}
          size={size}
          {...other}
          style={style}
        />
      )}
      {variant == 2 && (
        <StyledSpinner2
          styleOverrides={styleOverrides}
          variables={variables}
          _mode={mode}
          _color={color}
          duration={duration}
          className={className}
          fatness={fatness}
          size={size}
          {...other}
          style={style}
        />
      )}
      {variant == 3 && (
        <StyledSpinner3
          styleOverrides={styleOverrides}
          _color={color}
          size={size}
          fatness={fatness}
          duration={duration}
          className={className}
          style={style}
        >
          <div></div>
          <div></div>
          <div></div>
        </StyledSpinner3>
      )}
    </>
  );
};
