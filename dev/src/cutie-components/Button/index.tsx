import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styled from '@emotion/styled';
import tinycolor from 'tinycolor2';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */

interface ButtonProps {
  variant?:
    | 'contained'
    | 'outlined'
    | 'text'
    | 'text2'
    | 'outlined2'
    | 'outlined3'
    | 'outlined4'
    | 'contained2'
    | 'contained3'
    | 'contained4';
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  color?: string;
  size?: 'large' | 'small' | 'medium';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  square?: boolean;
  other?: object;
  sx?: React.CSSProperties | object;
}

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: ${(props) => props.variables.baseBorderRadius};
  display: inline-block;
  font-family: ${(props) => props.variables.baseFontFamily};
  white-space: nowrap;
  border: 1px solid transparent;
  transition: 0.1s ease-in-out;
  transition-property: background-color, border-color, color;
  ${(props) =>
    props.size == 'small' &&
    `font-size:${props.variables.fontSizeSmall}; padding: 6px 8px;`}
  ${(props) =>
    props.size == 'medium' &&
    `font-size:${props.variables.fontSizeMedium}; padding: 8px 12px;`}
    ${(props) =>
    props.size == 'large' &&
    `font-size:${props.variables.fontSizeLarge}; padding: 10px 16px;`}
    ${(props) => props.square && 'border-radius: 0;'}
    ${(props) =>
    props.disabled &&
    props.variant == 'contained' &&
    `color: ${props.variables.disabled} !important;
background-color:${tinycolor(props.variables.black)
      .setAlpha(0.04)
      .toString()} !important;
`}
    ${(props) =>
    props.disabled &&
    props._mode == 'dark' &&
    props.variant == 'contained' &&
    `color:${props.variables.disabled} !important;
  background-color:${tinycolor(props.variables.white)
    .setAlpha(0.1)
    .toString()} !important;
  `}
    ${(props) =>
    props.disabled &&
    props.variant == 'outlined' &&
    `color:${props.variables.disabled} !important;
  border-color:${props.variables.disabled} !important;
  background-color: transparent !important;
  `}
    ${(props) =>
    props.disabled &&
    props.variant == 'text' &&
    `color:${props.variables.disabled} !important;
background-color: transparent !important;
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
  font-size:1rem;
}
& > *:first-of-type {
  margin-right: 7px;
};`}
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
  font-size: 1rem;
}
& > *:last-of-type {
  margin-left: 7px;
};`}
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
    margin-right: 7px;
  }
  svg{
    font-size: 1rem;
  }
  & > *:last-of-type {
    margin-left: 7px;
  }`}
    ${(props) =>
    props.variant == 'contained' &&
    `color: ${
      tinycolor(props._color).isLight()
        ? props.variables.black
        : props.variables.white
    };
  background-color: ${props._color};
  &:hover{
    background-color:${[tinycolor(props._color).darken(5).toString()]};
  };
  &:active{
    background-color:${tinycolor(props._color).darken(10).toString()}
  };
  `}
    ${(props) =>
    props.variant == 'contained2' &&
    `color: ${
      tinycolor(props._color).isLight()
        ? props.variables.black
        : props.variables.white
    };
  background-color: ${props._color};
  &:hover{
    background-color:${[tinycolor(props._color).lighten(5).toString()]};
  };
  &:active{
    background-color:${tinycolor(props._color).lighten(10).toString()}
  };
  `}

    ${(props) =>
    props.variant == 'contained3' &&
    `color: ${
      tinycolor(props._color).isLight()
        ? props.variables.black
        : props.variables.white
    };
  background-color: ${props._color};
  &:hover{
    background-color:${[tinycolor(props._color).lighten(5).toString()]};
  };
  &:active{
    background-color:${props._color};
  };
  `}
  
  ${(props) =>
    props.variant == 'contained4' &&
    `color: ${
      tinycolor(props._color).isLight()
        ? props.variables.black
        : props.variables.white
    };
    position:relative;
background-color: ${props._color};
transition:none;
&:hover{
  background-color:${props._color};
&::after{
  content:'';
  position:absolute;
  background-color:transparent;
  top:2px;
  left:2px;
  width:100%;
  height:100%;
  border-radius:inherit;
  border:1px solid ${props._color};
}
};
&:active{
  background-color:${props._color};
  transform: translate(2px,2px);
  &::after{display:none}
};
`}

    // outlined
    ${(props) =>
    props.variant == 'outlined' &&
    `background-color: transparent;
border-color:${props._color};
color: ${props._color};
  &:hover{
background-color:${props._color};
    border-color:${props._color};
    color: ${
      tinycolor(props._color).isLight()
        ? props.variables.black
        : props.variables.white
    }
  }
  &:active{
    border-color:${tinycolor(props._color).darken(5).toString()};
    background-color: ${tinycolor(props._color).darken(5).toString()};
  };
  `}
    ${(props) =>
    props.variant == 'outlined2' &&
    `background-color: transparent;
border-color: ${props.variables.textPrimary};
color: ${props.variables.textPrimary};
  &:hover{
    color:${props._color};
    border-color:${props._color};
    box-shadow: 2px 2px 0 0px ${props._color};
  }
  &:active{
    border-color:${props._color};
    color: ${props._color};
    transform: translate(2px, 2px);
    box-shadow:none;
  };
  `}
    ${(props) =>
    props.variant == 'outlined3' &&
    `background-color: transparent;
border-color: ${props.variables.textPrimary};
color: ${props.variables.textPrimary};
  &:hover{
    color:${props._color};
    border-color:${props._color};
    box-shadow: 3px 3px 0 0px ${props._color};
  }
  `}
    ${(props) =>
    props.variant == 'outlined4' &&
    `border-color:${props._color};
    color:${props._color};
    background-color: transparent;
  &:hover{
    color:${props._color};
    border-color:${props._color};
    background-color:${tinycolor(props._color).setAlpha(0.08).toString()};
  }
  &:active{
    border-color:${tinycolor(props._color).darken(10).toString()};
    color: ${tinycolor(props._color).darken(10).toString()};
    background-color:${tinycolor(props._color).setAlpha(0.12).toString()};
  };
  `}
    // text
    ${(props) =>
    props._mode == 'light' &&
    props.variant == 'text' &&
    `color: ${props._color};
    background-color:transparent;
    &:hover{
      background-color:${tinycolor(props._color).setAlpha(0.08).toString()};
    };
    &:active{
      background-color:${tinycolor(props._color).setAlpha(0.12).toString()};
    };
    `}
    ${(props) =>
    props._mode == 'dark' &&
    props.variant == 'text' &&
    `color: ${props._color};
      background-color:transparent;
      &:hover{
        background-color:${tinycolor(props._color).setAlpha(0.15).toString()};
      };
      &:active{
        background-color:${tinycolor(props._color).setAlpha(0.2).toString()};
      };
      `}

      ${(props) =>
    props.variant == 'text2' &&
    `
    color:${props._color};
      background-color:transparent;
      &:hover {
        text-decoration:underline;
      }
      `} 
      
    ${(props) => props.styleOverrides};
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'text',
  children,
  className,
  onClick,
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  disabled,
  type,
  square,
  other,
  sx,
}) => {
  const theme = useContext(ThemeContext);
  let variables = theme.variables;
  const mode = theme.theme;
  const styleOverrides = theme.styleOverrides.button;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }

  return (
    <StyledButton
      css={sx}
      styleOverrides={styleOverrides}
      _mode={mode}
      variables={variables}
      variant={variant}
      _color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      square={square}
      type={type}
      className={className}
      onClick={onClick}
      {...other}
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
