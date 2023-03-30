import styled from '@emotion/styled';
import { useContext } from 'react';
import tinycolor from 'tinycolor2';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */
import { jsx as _jsx } from '@emotion/react/jsx-runtime';
import { Fragment as _Fragment } from '@emotion/react/jsx-runtime';
import { jsxs as _jsxs } from '@emotion/react/jsx-runtime';
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
export const MenuItem = ({
  children,
  onClose,
  className,
  sx,
  onClick,
  startIcon,
  endIcon,
  divider,
  other,
}) => {
  const theme = useContext(ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }
  const mode = theme.theme;
  const styleOverrides = theme.styleOverrides.menuItem;
  return _jsx(StyledMenuItem, {
    styleOverrides: styleOverrides,
    variables: variables,
    _mode: mode,
    startIcon: startIcon,
    endIcon: endIcon,
    divider: divider,
    onClick: onClick
      ? (e) => {
          onClick(e);
          onClose && onClose(e);
        }
      : onClose,
    className: className,
    ...other,
    css: sx,
    children:
      startIcon || endIcon
        ? _jsxs(_Fragment, {
            children: [
              startIcon,
              _jsx('div', {
                children: children,
              }),
              endIcon,
            ],
          })
        : children,
  });
};
