import { useContext } from 'react';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import styled from '@emotion/styled';
import tinycolor from 'tinycolor2';
import { Fragment as _Fragment } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { jsx as _jsx } from 'react/jsx-runtime';
const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: ${(props) => props.variables.baseBorderRadius};
  display: inline-block;
  font-family: ${(props) => props.variables.baseFontFamily};
  white-space: nowrap;
  border: 1px solid transparent;
  -webkit-transition: 0.1s background-color ease-in-out;
  -o-transition: 0.1s background-color ease-in-out;
  transition: 0.1s background-color ease-in-out;

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
  .CuteIcon {
    margin-left: auto;
  }
  & > *:last-of-type {
    margin-left: 7px;
  }`}

${(props) =>
    props._mode == 'light' &&
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
    props._mode == 'dark' &&
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
    background-color:${[tinycolor(props._color).darken(10).toString()]};
  `}

// outlined
${(props) =>
    props._mode == 'light' &&
    props.variant == 'outlined' &&
    `background-color: transparent;
border-color:${props._color};
color: ${props._color};
  &:hover{
    border-color:${props._color};
    color: ${props._color};
  }
  &:active{
    border-color:${tinycolor(props._color).darken(5).toString()};
    color: ${tinycolor(props._color).darken(5).toString()};
  };
  `}
${(props) =>
    props._mode == 'dark' &&
    props.variant == 'outlined' &&
    `color: ${props.variables.textPrimary};
border-color: ${props.variables.textPrimary};
  background-color: transparent;
  &:hover{
    border-color:${tinycolor(props._color).lighten(5).toString()};
    color: ${tinycolor(props._color).lighten(5).toString()};
  }
  &:active{
    border-color:${props._color};
    color: ${props._color};
  };`}

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
`;
export const Button = ({
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
  type,
  square,
  other,
}) => {
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
  const mode = theme.theme;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return /*#__PURE__*/ _jsx(StyledButton, {
    _mode: mode,
    variables: variables,
    variant: variant,
    _color: color,
    size: size,
    startIcon: startIcon,
    endIcon: endIcon,
    disabled: disabled,
    square: square,
    type: type,
    className: className,
    onClick: onClick,
    style: style,
    ...other,
    children:
      startIcon || endIcon
        ? /*#__PURE__*/ _jsxs(_Fragment, {
            children: [startIcon, children, endIcon],
          })
        : children,
  });
};
