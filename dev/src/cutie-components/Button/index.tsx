// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styled from '@emotion/styled';
import tinycolor from 'tinycolor2';

interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  // color?:
  //   | 'primary'
  //   | 'secondary'
  //   | 'neutral'
  //   | 'white'
  //   | 'black'
  //   | 'text'
  //   | 'error'
  //   | 'success';
  color?: any;
  size?: 'large' | 'small' | 'medium';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  square?: boolean;
  other?: object;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'text',
  children,
  className,
  onClick,
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  style,
  disabled,
  type = 'button',
  square,
  other,
}) => {
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
  const mode = theme.theme;

  const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 7px;
    display: inline-block;
    font-family: ${variables.fontFamily};
    white-space: nowrap;
    border: 1px solid transparent;

    ${size == 'small' &&
    `font-size:${variables.fontSizeSmall};padding: 6px 8px;`}
    ${size == 'medium' &&
    `font-size:${variables.fontSizeMedium};padding: 8px 12px;`}
    ${size == 'large' &&
    `font-size:${variables.fontSizeLarge};padding: 10px 16px;`}

    ${square && 'border-radius: 0;'}

    ${disabled &&
    variant == 'contained' &&
    `color:${variables.disabled} !important;
    background-color:${tinycolor(variables.black)
      .setAlpha(0.04)
      .toString()} !important;
    `}
    ${disabled &&
    mode == 'dark' &&
    variant == 'contained' &&
    `color:${variables.disabled} !important;
      background-color:${tinycolor(variables.white)
        .setAlpha(0.1)
        .toString()} !important;
      `}
    ${disabled &&
    variant == 'outlined' &&
    `color:${variables.disabled} !important;
      border-color:${variables.disabled} !important;
      `}
      ${disabled &&
    variant == 'text' &&
    `color:${variables.disabled} !important;
    background-color: transparent !important;
          `}

    ${startIcon &&
    !endIcon &&
    `display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    & > *:first-of-type {
      margin-right: 7px;
    };`}

    ${endIcon &&
    !startIcon &&
    `display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    & > *:last-child {
      margin-left: 7px;
    };`}

    ${startIcon &&
    endIcon &&
    `display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      & > *:first-of-type {
        margin-right: 7px;
      }
      .CuteIcon {
        margin-left: auto;
      }
      & > *:last-child {
        margin-left: 7px;
      }`}

    ${mode == 'light' &&
    variant == 'contained' &&
    `color: ${
      tinycolor(variables[color]).isLight()
        ? variables.textPrimary
        : variables.textOpposite
    };
      background-color: ${variables[color]};
      &:hover{
        background-color:${[tinycolor(variables[color]).darken(5).toString()]};
      };
      &:active{
        background-color:${tinycolor(variables[color]).darken(10).toString()}
      };
      `}
    ${mode == 'dark' &&
    variant == 'contained' &&
    `color: ${
      tinycolor(variables[color]).isLight()
        ? variables.textOpposite
        : variables.textPrimary
    };
      background-color: ${variables[color]};
      &:hover{
        background-color:${[tinycolor(variables[color]).lighten(5).toString()]};
      };
      &:active{
        background-color:${variables[color]};
      `}

  // outlined
    ${mode == 'light' &&
    variant == 'outlined' &&
    `background-color: transparent;
    border-color:${variables[color]};
    color: ${variables[color]};
      &:hover{
        border-color:${variables[color]};
        color: ${variables[color]};
      }
      &:active{
        border-color:${tinycolor(variables[color]).darken(5).toString()};
        color: ${tinycolor(variables[color]).darken(5).toString()};
      };
      `}
    ${mode == 'dark' &&
    variant == 'outlined' &&
    `color: ${variables.textPrimary};
    border-color: ${variables.textPrimary};
      background-color: transparent;
      &:hover{
        border-color:${tinycolor(variables[color]).lighten(5).toString()};
        color: ${tinycolor(variables[color]).lighten(5).toString()};
      }
      &:active{
        border-color:${variables[color]};
        color: ${variables[color]};
      };`}

    // text
      ${mode == 'light' &&
    variant == 'text' &&
    `color: ${variables[color]};
        background-color:transparent;
        &:hover{
          background-color:${tinycolor(variables[color])
            .setAlpha(0.08)
            .toString()};
        };
        &:active{
          background-color:${tinycolor(variables[color])
            .setAlpha(0.12)
            .toString()};
        };
        `}
      ${mode == 'dark' &&
    variant == 'text' &&
    `color: ${variables[color]};
          background-color:transparent;
          &:hover{
            background-color:${tinycolor(variables[color])
              .setAlpha(0.15)
              .toString()};
          };
          &:active{
            background-color:${tinycolor(variables[color])
              .setAlpha(0.2)
              .toString()};
          };
          `}
  `;

  return (
    <StyledButton
      disabled={disabled}
      type={type}
      className={className}
      onClick={onClick}
      {...other}
      style={style}
    >
      {startIcon || endIcon ? (
        <>
          {startIcon}
          {children}
          {endIcon}
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
};
