import styled from '@emotion/styled';
import React, { useContext } from 'react';
import tinycolor from 'tinycolor2';
import { ThemeContext } from '../../ThemeProvider';

interface MenuItemProps {
  className?: string;
  onClose?: (event: React.MouseEvent<any, MouseEvent>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<any>) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  divider?: boolean;
  other?: object;
}

const StyledMenuItem = styled.li`
  padding: 9px 15px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  color: ${(props) => props.variables.textPrimary};
  font-size: ${(props) => props.variables.fontSizeSmall};
  ${(props) =>
    props.divider &&
    `
    border-bottom: 1px solid ${props.variables.divider};`}

  &:hover {
    background-color: ${tinycolor('#000').setAlpha(0.04).toString()};
  }

  &:active {
    background-color: ${tinycolor('#000').setAlpha(0.06).toString()};
  }

  ${(props) =>
    props._mode == 'dark' &&
    `
    &:hover {
      background-color: ${tinycolor('#fff').setAlpha(0.07).toString()};
    }

    &:active {
      background-color: ${tinycolor('#fff').setAlpha(0.1).toString()};
    }
    `}

  ${(props) =>
    props.startIcon &&
    !props.endIcon &&
    `display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    svg{
      font-size:1.2rem;
    }
    & > svg:first-of-type {
      margin-right: 10px;
      color: ${props.variables.textPrimary};
    }`}

    ${(props) =>
    props.endIcon &&
    !props.startIcon &&
    `display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    
      & > div:first-of-type {
        margin-right: 10px;
      }
      svg{
        font-size:1.2rem;
      }
      & > svg:last-of-type {
        margin-left: auto;
        color: ${props.variables.textPrimary};
        min-width: 10px;
      }`}

      ${(props) =>
    props.startIcon &&
    props.endIcon &&
    `display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;

      & > svg:first-of-type {
        margin-right: 10px;
        color: ${props.variables.textPrimary};
        min-width: 10px;
      }
      svg{
        font-size:1.2rem;
      }
      div {
        margin-right: 10px;
      }
    
      & > svg:last-of-type {
        color: ${props.variables.textPrimary};
        min-width: 10px;
        margin-left: auto;
      }`}

      ${(props) => props.styleOverrides};
`;

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  onClose,
  className,
  style,
  onClick,
  startIcon,
  endIcon,
  divider,
  other,
}) => {
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
  const mode = theme.theme;
  const styleOverrides = theme.styleOverrides.menuItem;

  return (
    <StyledMenuItem
      styleOverrides={styleOverrides}
      variables={variables}
      _mode={mode}
      startIcon={startIcon}
      endIcon={endIcon}
      divider={divider}
      onClick={
        onClick
          ? (e) => {
              onClick(e);
              onClose && onClose(e);
            }
          : onClose
      }
      className={className}
      {...other}
      style={style}
    >
      {startIcon || endIcon ? (
        <>
          {startIcon}
          <div>{children}</div>
          {endIcon}
        </>
      ) : (
        children
      )}
    </StyledMenuItem>
  );
};
