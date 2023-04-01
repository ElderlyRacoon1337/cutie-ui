import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import tinycolor from 'tinycolor2';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<any>) => void;
  active?: boolean;
  activeFilled?: boolean;
  other?: object;
  square?: boolean;
  color?: string;
  sx?: React.CSSProperties | object;
}

const StyledListItem = styled.li`
  padding: 8px 15px;
  border-radius: ${(props) => props.variables.baseBorderRadius};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 7px;
  list-style: none;
  font-family: ${(props) => props.variables.baseFontFamily};
  font-size: ${(props) => props.variables.fontSizeMedium};
  font-weight: 400;

  ${(props) => props.square && `border-radius: 0;`}

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
      svg{
        font-size:1.2rem;
      }
      div {
        margin-right: 10px;
      }
      & > svg:last-of-type {
        margin-left: auto;
        min-width: 20px;
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
      min-width: 10px;
    }
    svg{
      font-size:1.2rem;
    }
    div {
      margin-right: 10px;
    }
    & > svg:last-of-type {
      min-width: 10px;
      margin-left: auto;
    }`}

    ${(props) =>
    props.active &&
    `color: ${props._color} !important;
    div {
      color: ${props._color} !important;
    }`}

    ${(props) =>
    props.activeFilled &&
    `background-color: ${props._color};
    color: ${
      tinycolor(props._color).isLight()
        ? props.variables.black
        : props.variables.white
    } !important;
    & > * {
      color:  ${
        tinycolor(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      } !important;
    }
    div {
      color: ${
        tinycolor(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      } !important;
    }`}

    ${(props) =>
    props._mode == 'dark' &&
    `
    ${
      props.active &&
      `color: ${props._color} !important;
      div {
        color: ${props._color} !important;
      }
      & > * {
        color: ${props._color} !important;
      }`
    }

    ${
      props.activeFilled &&
      `background-color: ${props._color};
    & > * {
      color:  ${
        tinycolor(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      } !important;
    }
    div {
      color:  ${
        tinycolor(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      } !important;
    }`
    }
    `}
    ${(props) => props.styleOverrides};
`;

export const ListItem: React.FC<ListItemProps> = ({
  className,
  children,
  startIcon,
  onClick,
  active,
  endIcon,
  activeFilled,
  other,
  square,
  color = 'primary',
  sx,
}) => {
  const theme = useContext(ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }
  const mode = theme.theme;
  const styleOverrides = theme.styleOverrides.listItem;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }

  return (
    <StyledListItem
      styleOverrides={styleOverrides}
      onClick={onClick}
      className={className}
      variables={variables}
      _mode={mode}
      startIcon={startIcon}
      active={active}
      activeFilled={activeFilled}
      _color={color}
      square={square}
      endIcon={endIcon}
      {...other}
      css={sx}
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
    </StyledListItem>
  );
};
