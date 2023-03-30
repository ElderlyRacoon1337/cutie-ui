import styled from '@emotion/styled';
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import tinycolor from 'tinycolor2';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */
import { jsx as _jsx } from '@emotion/react/jsx-runtime';
import { jsxs as _jsxs } from '@emotion/react/jsx-runtime';
const StyledInput = styled.div`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  .row {
    display: flex;
    flex-wrap: nowrap;
  }
  .message {
    font-size: ${(props) => props.variables.fontSizeSmall};
    margin-left: 10px;
    position: absolute;
    color: ${(props) => props.variables.textSecondary};
    font-size: 12px;
    bottom: -20px;
  }

  button {
    border-bottom-left-radius: 0 !important;
    border-top-left-radius: 0 !important;
    transition: none;
    margin-left: auto;
  }

  input {
    appearance: none;
    flex: 1;
    outline: none;
    border: none;
    background-color: transparent;
    color: ${(props) => props.variables.textPrimary};
    font-family: ${(props) => props.variables.baseFontFamily};
    font-size: ${(props) => props.variables.fontSizeMedium};
  }

  ${(props) =>
    props.square &&
    `border-radius: 0 !important;
button {
border-radius: 0 !important;
}
`}

  ${(props) =>
    props.startIcon &&
    !props.endIcon &&
    `.row {
  display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
& > svg {
  color: ${props.variables.textSecondary};
  margin-left: 8px;
}


}`}

${(props) =>
    props.endIcon &&
    !props.startIcon &&
    `.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  & > svg {
    color: ${props.variables.textSecondary};
    margin-right: 8px;
  }

}`}

${(props) =>
    props.endIcon &&
    props.startIcon &&
    `.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  & > svg:nth-of-type(1) {
    color:${props.variables.textSecondary};
    margin-left: 8px;
  }
 
  & > svg:nth-of-type(2) {
    color: ${props.variables.textSecondary};
    margin-right: 8px;
  }
  }`}

  ${(props) =>
    props.size == 'small' &&
    `font-size: ${props.variables.fontSizeSmall};
border-radius: 5px;
input {
padding: 6px 6px;
}

button {
border-radius: 5px;
}`}

${(props) =>
    props.size == 'medium' &&
    `font-size: ${props.variables.fontSizeMedium};
border-radius: ${props.variables.baseBorderRadius};
input {
  padding: 8px 10px;
  ${props.button && 'padding-right: 5px;'}
}`}

${(props) =>
    props.size == 'large' &&
    `font-size: ${props.variables.fontSizeLarge};
border-radius: ${props.variables.baseBorderRadius};
input {
  padding: 10px 12px;
  ${props.button && 'padding-right: 7px;'}
}`}

${(props) =>
    props.variant == 'filled' &&
    `outline: 1px solid transparent !important;
border-bottom: 1.5px solid;
border-radius: 0;
background-color: ${tinycolor('black').setAlpha(0.06).toString()};
input {
background-color: transparent;
}
svg {
color: ${props.variables.textSecondary};
}
button {
border-radius: 0;
}
`}

${(props) =>
    props.variant == 'filled' &&
    props._mode == 'dark' &&
    `background-color: ${tinycolor('white').setAlpha(0.06).toString()};`}

${(props) =>
    props.variant == 'outlined' &&
    `
    // border: 1px solid ${props.variables.divider};
    box-shadow:0 0 0 1px ${props.variables.divider};
    button {
      border-radius: 0;
    }
    `}

${(props) =>
    props.variant == 'underlined' &&
    `border-radius: 0;
border: none;
border-bottom: 1.5px solid;
input {
  border: none;
  padding-left: 0;
  padding-right: 0;
}
.message {
  margin-left: 0;
}

button {
  border-radius: 0;
}
`}

${(props) =>
    props.variant == 'basic' &&
    `border-radius: 0;
input {
  border: none;
  padding-left: 0;
  padding-right: 0;
}`}

outline-color: ${(props) => props.variables.divider};
  ${(props) =>
    props.focused &&
    `border-color:${props._color};
      box-shadow:0 0 0 1.5px ${props._color};
svg {
  color: ${props._color} !important;
}
`}

  ${(props) => props.styleOverrides};
`;
export const Input = ({
  placeholder,
  className,
  sx,
  type,
  value,
  onChange,
  color = 'primary',
  variant = 'outlined',
  size = 'medium',
  square = false,
  startIcon,
  endIcon,
  message,
  autoFocus,
  defaultValue,
  autoComplete,
  maxLength,
  other,
  button,
}) => {
  const [focused, setFocused] = useState(false);
  const theme = useContext(ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }
  const mode = theme.theme;
  const styleOverrides = theme.styleOverrides.input;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return _jsxs(StyledInput, {
    styleOverrides: styleOverrides,
    button: button,
    _mode: mode,
    variables: variables,
    _color: color,
    variant: variant,
    size: size,
    square: square,
    startIcon: startIcon,
    endIcon: endIcon,
    className: className,
    css: sx,
    focused: focused,
    children: [
      _jsxs('div', {
        className: 'row',
        children: [
          startIcon,
          _jsx('input', {
            minLength: maxLength,
            maxLength: maxLength,
            autoComplete: autoComplete,
            defaultValue: defaultValue,
            autoFocus: autoFocus,
            onFocus: () => setFocused(true),
            onBlur: () => setFocused(false),
            placeholder: placeholder,
            type: type,
            value: value,
            onChange: onChange,
            ...other,
          }),
          endIcon,
          React.Children.map(button, (child) =>
            /*#__PURE__*/ React.cloneElement(child, {
              color: color,
              size: size,
            })
          ),
        ],
      }),
      message &&
        _jsx('p', {
          className: 'message',
          children: message,
        }),
    ],
  });
};
