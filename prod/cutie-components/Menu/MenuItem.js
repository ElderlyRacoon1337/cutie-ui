import styled from '@emotion/styled';
import { useContext } from 'react';
import tinycolor from 'tinycolor2';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
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
    
      div {
        margin-right: 10px;
      }
    
      & > svg:last-of-type {
        color: ${props.variables.textPrimary};
        min-width: 10px;
        margin-left: auto;
      }`}
`;
export const MenuItem = ({
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
  return /*#__PURE__*/ _jsx(StyledMenuItem, {
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
    style: style,
    children:
      startIcon || endIcon
        ? /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
              startIcon,
              /*#__PURE__*/ _jsx('div', {
                children: children,
              }),
              endIcon,
            ],
          })
        : children,
  });
};
