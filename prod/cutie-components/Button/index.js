'use strict';

var _react = require('react');
var _ThemeProvider = require('../../cutie-utils/ThemeProvider');
var _styled = _interopRequireDefault(require('@emotion/styled'));
var _tinycolor = _interopRequireDefault(require('tinycolor2'));
var _variables = require('../../variables');
var _jsxRuntime = require('@emotion/react/jsx-runtime');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
/** @jsxImportSource @emotion/react */

const StyledButton = _styled.default.button`
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
      (props.variant == 'contained' ||
        props.variant == 'contained2' ||
        props.variant == 'contained3' ||
        props.variant == 'contained4') &&
      `color: ${props.variables.disabled} !important;
background-color:${(0, _tinycolor.default)(props.variables.black)
        .setAlpha(0.04)
        .toString()} !important;
      cursor: not-allowed;
      transform: none !important;
      box-shadow: none !important;
    &::after{
      display: none !important;
    }
`}
    ${(props) =>
      props.disabled &&
      props._mode == 'dark' &&
      (props.variant == 'contained' ||
        props.variant == 'contained2' ||
        props.variant == 'contained3' ||
        props.variant == 'contained4') &&
      `color:${props.variables.disabled} !important;
  background-color:${(0, _tinycolor.default)(props.variables.white)
    .setAlpha(0.1)
    .toString()} !important;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
    &::after{
      display: none !important;
    }
  `}
    ${(props) =>
      props.disabled &&
      (props.variant == 'outlined' ||
        props.variant == 'outlined2' ||
        props.variant == 'outlined3' ||
        props.variant == 'outlined4') &&
      `color:${props.variables.disabled} !important;
  border-color:${props.variables.disabled} !important;
  background-color: transparent !important;
  cursor: not-allowed;
  box-shadow: none !important;
  transform: none !important;
  `}
    ${(props) =>
      props.disabled &&
      (props.variant == 'text' || props.variant == 'tex2') &&
      `color:${props.variables.disabled} !important;
background-color: transparent !important;
cursor: not-allowed;
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
        (0, _tinycolor.default)(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      };
  background-color: ${props._color};
  &:hover{
    background-color:${[
      (0, _tinycolor.default)(props._color).darken(5).toString(),
    ]};
  };
  &:active{
    background-color:${(0, _tinycolor.default)(props._color)
      .darken(10)
      .toString()}
  };
  `}
    ${(props) =>
      props.variant == 'contained2' &&
      `color: ${
        (0, _tinycolor.default)(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      };
  background-color: ${props._color};
  &:hover{
    background-color:${[
      (0, _tinycolor.default)(props._color).lighten(5).toString(),
    ]};
  };
  &:active{
    background-color:${(0, _tinycolor.default)(props._color)
      .lighten(10)
      .toString()}
  };
  `}

    ${(props) =>
      props.variant == 'contained3' &&
      `color: ${
        (0, _tinycolor.default)(props._color).isLight()
          ? props.variables.black
          : props.variables.white
      };
  background-color: ${props._color};
  &:hover{
    background-color:${[
      (0, _tinycolor.default)(props._color).lighten(5).toString(),
    ]};
  };
  &:active{
    background-color:${props._color};
  };
  `}
  
  ${(props) =>
    props.variant == 'contained4' &&
    `color: ${
      (0, _tinycolor.default)(props._color).isLight()
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
      (0, _tinycolor.default)(props._color).isLight()
        ? props.variables.black
        : props.variables.white
    }
  }
  &:active{
    border-color:${(0, _tinycolor.default)(props._color).darken(5).toString()};
    background-color: ${(0, _tinycolor.default)(props._color)
      .darken(5)
      .toString()};
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
    background-color:${(0, _tinycolor.default)(props._color)
      .setAlpha(0.08)
      .toString()};
  }
  &:active{
    border-color:${(0, _tinycolor.default)(props._color).darken(10).toString()};
    color: ${(0, _tinycolor.default)(props._color).darken(10).toString()};
    background-color:${(0, _tinycolor.default)(props._color)
      .setAlpha(0.12)
      .toString()};
  };
  `}
    // text
    ${(props) =>
      props._mode == 'light' &&
      props.variant == 'text' &&
      `color: ${props._color};
    background-color:transparent;
    &:hover{
      background-color:${(0, _tinycolor.default)(props._color)
        .setAlpha(0.08)
        .toString()};
    };
    &:active{
      background-color:${(0, _tinycolor.default)(props._color)
        .setAlpha(0.12)
        .toString()};
    };
    `}
    ${(props) =>
      props._mode == 'dark' &&
      props.variant == 'text' &&
      `color: ${props._color};
      background-color:transparent;
      &:hover{
        background-color:${(0, _tinycolor.default)(props._color)
          .setAlpha(0.15)
          .toString()};
      };
      &:active{
        background-color:${(0, _tinycolor.default)(props._color)
          .setAlpha(0.2)
          .toString()};
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
const Button = ({
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
  const theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  let variables = theme.variables;
  const mode = theme.theme;
  const styleOverrides = theme.styleOverrides.button;
  if (Object.keys(variables).length === 0) {
    variables = _variables.initialVariables;
  }
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return (0, _jsxRuntime.jsx)(StyledButton, {
    css: sx,
    styleOverrides: styleOverrides,
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
    ...other,
    children:
      startIcon || endIcon
        ? (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [startIcon, children, endIcon],
          })
        : children,
  });
};
module.exports = {
  Button,
};
