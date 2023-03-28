import styled from '@emotion/styled';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import tinycolor from 'tinycolor2';
import { jsx as _jsx } from 'react/jsx-runtime';
const StyledIconButton = styled.button`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 50%;
  -webkit-transition: 0.1s all ease-in-out;
  -o-transition: 0.1s all ease-in-out;
  transition: 0.1s all ease-in-out;
  cursor: pointer;
  ${(props) =>
    props.size == 'small' &&
    `padding: 5px;
  & > *:first-of-type {
    font-size: 17px;
  }`}
  ${(props) =>
    props.size == 'medium' &&
    `padding: 5px;
    & > *:first-of-type {
      font-size: 20px;
    }`}
  ${(props) =>
    props.size == 'large' &&
    `padding: 5px;
    & > *:first-of-type {
      font-size: 25px;
    }`}
    ${(props) =>
    props.disabled &&
    props.variant == 'text' &&
    `
    background-color: transparent !important;
    border-color: transparent !important;
    color: ${props.variables.disabled} !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    `}

    ${(props) =>
    props.disabled &&
    props.variant == 'outlined' &&
    `background-color: transparent !important;
    border-color: var(--disabled) !important;
    color: var(--disabled) !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
      `}

      ${(props) =>
    props.disabled &&
    props.variant == 'contained' &&
    `background-color: var(--glass) !important;
    border-color: transparent !important;
    color: var(--disabled) !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
        `}
    
    ${(props) =>
    props.variant == 'contained' &&
    `border: 1px solid ${props._color};
  background-color: ${props._color};
  color: ${
    tinycolor(props._color).isLight()
      ? props.variables.black
      : props.variables.white
  };
  &:hover {
    background-color: ${tinycolor(props._color).darken(5)};
    border-color: ${tinycolor(props._color).darken(5)};
  }
  &:active {
    border-color:${tinycolor(props._color).darken(10)};
    background-color:${tinycolor(props._color).darken(10)};
  }
`}
    ${(props) =>
    props.variant == 'outlined' &&
    `color: ${props.variables.textPrimary};
  border: 1px solid  ${props.variables.textPrimary};
  background-color: transparent;
  &:hover {
    background-color: transparent;
    color: ${props._color};
    border: 1px solid  ${props._color};
    -webkit-box-shadow: 0px 0px 0px 3px ${tinycolor(props._color).setAlpha(
      0.08
    )};
    box-shadow: 0px 0px 0px 3px ${tinycolor(props._color).setAlpha(0.08)};
  }
  &:active {
    color: ${tinycolor(props._color).darken(5)};
    border: 1px solid  ${tinycolor(props._color).darken(5)};
    -webkit-box-shadow: 0px 0px 0px 3px ${tinycolor(props._color).setAlpha(
      0.12
    )};
    box-shadow: 0px 0px 0px 3px  ${tinycolor(props._color).setAlpha(0.12)};
  }`}

  ${(props) =>
    props.variant == 'text' &&
    `background-color: transparent;
  color: ${props._color};
  border: 1px solid transparent;

  &:hover {
    background-color: ${tinycolor(props._color).setAlpha(0.08)};
    color: ${props._color};
  }

  &:active {
    background-color:  ${tinycolor(props._color).setAlpha(0.12)};
  }`}
`;
export const IconButton = ({
  variant = 'text',
  className,
  onClick,
  size = 'medium',
  color = 'primary',
  style,
  disabled,
  type,
  children,
  other,
}) => {
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return /*#__PURE__*/ _jsx(StyledIconButton, {
    variables: variables,
    variant: variant,
    _color: color,
    size: size,
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: clsx(className),
    ...other,
    style: style,
    children: children,
  });
};
