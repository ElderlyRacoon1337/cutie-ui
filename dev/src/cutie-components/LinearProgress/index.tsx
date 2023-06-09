import styled from '@emotion/styled';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */

interface LinearProgressProps {
  height?: number | string;
  className?: string;
  value?: number | string;
  sx?: React.CSSProperties | object;
  loader?: boolean;
  color?: string;
  duration?: number | string;
  variant?: 1 | 2 | 3;
}

const StyledLinearProgress = styled.div`
  width: 100%;
  overflow: hidden;
  div:first-of-type {
    height: 100%;
  }
  height: ${(props) => props._height}px;

  div:first-of-type {
    width: ${(props) => props._value}%;
  }

  ${(props) =>
    props.loader &&
    props.variant == 1 &&
    `div:first-of-type {
      display: none;
    }
    div:last-of-type {
      height: 100%;
      -webkit-animation: horizontalProgressBar1 1.5s linear infinite;
      animation: horizontalProgressBar1 1.5s linear infinite;
      animation-duration: ${props.duration}s;
    }
    `}
  ${(props) =>
    props.loader &&
    props.variant == 2 &&
    `div:first-of-type {
        display: none;
      }
      div:last-of-type {
        height: 100%;
        -webkit-animation: horizontalProgressBar2 1.5s linear infinite;
        animation: horizontalProgressBar2 1.5s linear infinite;
        animation-duration: ${props.duration}s;
      }
      `}
    ${(props) =>
    props.loader &&
    props.variant == 3 &&
    `div:first-of-type {
      display: none;
    }
    div:last-of-type {
      height: 100%;
      -webkit-animation: horizontalProgressBar3 1.5s linear infinite;
      animation: horizontalProgressBar3 1.5s linear infinite;
      animation-duration: ${props.duration}s;
    }
    `}

    div {
    background-color: ${(props) => props._color};
  }

  ${(props) =>
    props._mode == 'light' && `background-color: rgba(0, 0, 0, 0.1);`}
  ${(props) =>
    props._mode == 'dark' && `background-color: rgba(255, 255, 255, 0.1);`}

    @keyframes horizontalProgressBar1 {
    0% {
      margin-left: 0%;
      margin-right: 100%;
    }
    20% {
      margin-left: 0%;
      margin-right: 60%;
    }
    40% {
      margin-left: 40%;
      margin-right: 20%;
    }
    60% {
      margin-left: 80%;
      margin-right: -20%;
    }
    80% {
      margin-left: 100%;
      margin-right: -60%;
    }
    100% {
      margin-left: 100%;
      margin-right: -80%;
    }
  }

  @keyframes horizontalProgressBar2 {
    0% {
      margin-left: -20%;
      margin-right: 100%;
    }
    20% {
      margin-left: 20%;
      margin-right: 60%;
    }
    40% {
      margin-left: 40%;
      margin-right: 40%;
    }
    60% {
      margin-left: 60%;
      margin-right: 20%;
    }
    80% {
      margin-left: 100%;
      margin-right: -20%;
    }
    100% {
      margin-left: 150%;
      margin-right: -40%;
    }
  }

  @keyframes horizontalProgressBar3 {
    0% {
      margin-left: 0;
      margin-right: 0;
    }
    25% {
      margin-left: 100%;
      margin-right: 100%;
    }
    50% {
      margin-left: 0;
      margin-right: 0;
    }
    75% {
      margin-left: 100%;
      margin-right: 100%;
    }

    100% {
      margin-left: 0;
      margin-right: 0;
    }
  }

  ${(props) => props.styleOverrides};
`;

export const LinearProgress: React.FC<LinearProgressProps> = ({
  value,
  className,
  height = 3,
  sx,
  color = 'textPrimary',
  loader,
  duration = 1,
  variant,
}) => {
  const theme = useContext(ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }
  const mode = theme.theme;
  const styleOverrides = theme.styleOverrides.linearProgress;

  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }

  return (
    <StyledLinearProgress
      styleOverrides={styleOverrides}
      variables={variables}
      _mode={mode}
      loader={loader}
      _color={color}
      duration={duration}
      variant={variant}
      className={className}
      css={sx}
      _value={value}
      _height={height}
    >
      <div />
      <div />
    </StyledLinearProgress>
  );
};
