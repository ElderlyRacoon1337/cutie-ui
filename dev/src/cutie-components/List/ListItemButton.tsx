import styled from '@emotion/styled';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styles from './List.module.scss';
import tinycolor from 'tinycolor2';

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  startIcon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<any>) => void;
  active?: boolean;
  endIcon?: React.ReactNode;
  activeFilled?: boolean;
  other?: object;
  square?: boolean;
  color?: string;
}

const StyledListItemButton = styled.li`
  &:hover {
    background-color: ${tinycolor('#000').setAlpha(0.04).toString()};
  }

  &:active {
    background-color: ${tinycolor('#000').setAlpha(0.06).toString()};
  }

  ${(props) =>
    props._mode == 'dark' &&
    `&:hover {
    background-color: ${tinycolor('#fff').setAlpha(0.07).toString()};
  }

  &:active {
    background-color: ${tinycolor('#fff').setAlpha(0.1).toString()};
  }`}

  padding: 8px 15px;
  border-radius: ${(props) => props.variables.baseBorderRadius};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 7px;
  cursor: pointer;
  list-style: none;
  font-family: ${(props) => props.variables.baseFontFamily};
  font-size: ${(props) => props.variables.fontSizeMedium};
  font-weight: 400;

  ${(props) => props.square && `border-radius: 0;`}

  ${(props) =>
    props.startIcon &&
    `display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  
    & > *:first-of-type {
      margin-right: 10px;
    }`}

    ${(props) =>
    props.endIcon &&
    `display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  
    & > *:last-of-type {
      margin-left: 10px;
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
    & > *:first-of-type {
      margin-right: 10px;
      min-width: 10px;
    }
    div {
      margin-right: 10px;
    }
    & > *:last-of-type {
      min-width: 10px;
      margin-left: auto;
    }`}

    ${(props) =>
    props.active &&
    `background-color: ${tinycolor(props._color).setAlpha(0.08).toString()};
    color: ${tinycolor(props._color).darken(10).toString()};
    div {
      color:  ${tinycolor(props._color).darken(10).toString()};
    }
    &:hover {
      background-color:  ${tinycolor(props._color).setAlpha(0.12).toString()};
      color:  ${tinycolor(props._color).darken(10).toString()};
    }`}

    ${(props) =>
    props.activeFilled &&
    `background-color: ${props._color};
    color: ${
      tinycolor(props._color).isLight()
        ? props.variables.black
        : props.variables.white
    };
    & > * {
      color:  ${
        tinycolor(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      };
    }
    div {
      color: ${
        tinycolor(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      };
    }
    &:hover {
      background-color: ${tinycolor(props._color).darken(5).toString()};
      color: ${
        tinycolor(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      };
    }`}

    ${(props) =>
    props._mode == 'dark' &&
    `
    ${
      props.active &&
      `color: ${tinycolor(props._color).lighten(10).toString()};
      div {
        color:  ${tinycolor(props._color).lighten(10).toString()};
      }
      & > * {
        color:  ${tinycolor(props._color).lighten(10).toString()};
      }
      &:hover {
        color:  ${tinycolor(props._color).lighten(10).toString()};
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
      };
    }
    div {
      color:  ${
        tinycolor(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      };
    }
    &:hover {
      background-color: ${tinycolor(props._color).darken(5).toString()};
      color: ${
        tinycolor(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      };
    }`
    }

    `}
`;

export const ListItemButton: React.FC<ListItemProps> = ({
  className,
  children,
  style,
  startIcon,
  onClick,
  active,
  endIcon,
  activeFilled,
  other,
  square,
  color = 'neutral',
}) => {
  const theme = useContext(ThemeContext);
  const mode = theme.theme;
  const variables = theme.variables;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }

  return (
    <StyledListItemButton
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
    </StyledListItemButton>
  );
};
