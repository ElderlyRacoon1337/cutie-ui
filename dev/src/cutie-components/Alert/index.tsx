import { IconButton } from '../IconButton';
import React, { useContext, useEffect } from 'react';
import { Icon } from '../Icon';
import { ThemeContext } from '../../ThemeProvider';
import styled from '@emotion/styled';
import tinycolor from 'tinycolor2';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */

interface AlertProps {
  children?: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  className?: string;
  sx?: React.CSSProperties | object;
  position?:
    | 'topRight'
    | 'topLeft'
    | 'bottomRight'
    | 'bottomLeft'
    | 'topCenter'
    | 'bottomCenter';
  color?: string;
  startIcon?: React.ReactNode;
  withioutButton?: boolean;
  duration?: number;
  other?: object;
}

const StyledAlert = styled.div`
  position: fixed;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 10px;
  height: 45px;
  padding: 0 15px;
  backdrop-filter: blur(10px);
  ${(props) =>
    `color: ${
      tinycolor(props._color).isLight()
        ? props.variables.black
        : props.variables.white
    };
    svg {
      color: ${
        tinycolor(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      };
    }
    `}

  ${(props) =>
    props.startIcon &&
    `& > svg {
      margin-right:10px;
    }
    `}

  min-width: 300px;
  -webkit-box-shadow: ${(props) => props.variables.baseBoxShadow};
  box-shadow: ${(props) => props.variables.baseBoxShadow};
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  z-index: 1;
  font-family: ${(props) => props.variables.baseFontFamily};
  font-size: ${(props) => props.variables.fontSizeMedium};

  button {
    margin-left: auto;
    position: relative;
    right: -5px;
  }

  ${(props) => props.position == 'topRight' && 'top: 25px; right: 25px;'}
  ${(props) => props.position == 'topLeft' && 'top: 25px; left: 25px;'}
${(props) => props.position == 'bottomRight' && 'bottom: 25px; right: 25px;'}
${(props) => props.position == 'bottomLeft' && 'bottom: 25px; left: 25px;'}
${(props) =>
    props.position == 'topCenter' &&
    `top: 25px;
right: 0;
left: 0;
margin-left: auto;
margin-right: auto;`}
${(props) =>
    props.position == 'bottomCenter' &&
    `bottom: 25px;
right: 0;
left: 0;
margin-left: auto;
margin-right: auto;`}
  background-color: ${(props) => props._color};

  ${(props) => props.styleOverrides};
`;

export const Alert: React.FC<AlertProps> = ({
  children,
  position = 'bottomCenter',
  color = 'primary',
  className,
  sx,
  startIcon,
  onClose,
  withioutButton = false,
  duration = 3000,
  open,
  other,
}) => {
  const theme = useContext(ThemeContext);
  let variables = theme.variables;
  const styleOverrides = theme.styleOverrides.alert;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }

  if (!startIcon) {
    if (color == 'error') {
      startIcon = (
        <Icon fontSize={'1.2rem'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </Icon>
      );
    } else if (color == 'success') {
      startIcon = (
        <Icon fontSize={'1.2rem'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </Icon>
      );
    } else if (color == 'warning') {
      startIcon = (
        <Icon fontSize={'1.4rem'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </Icon>
      );
    } else if (color == 'info') {
      startIcon = (
        <Icon fontSize={'1.4rem'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </Icon>
      );
    }
  }

  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, duration);
    return () => {
      clearTimeout(timeout);
    };
  }, [open]);

  return (
    <>
      {open && (
        <StyledAlert
          styleOverrides={styleOverrides}
          startIcon={startIcon}
          variables={variables}
          position={position}
          _color={color}
          className={className}
          {...other}
          css={sx}
        >
          {startIcon}
          {children}
          {!withioutButton && (
            <IconButton onClick={onClose}>
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Icon>
            </IconButton>
          )}
        </StyledAlert>
      )}
    </>
  );
};
