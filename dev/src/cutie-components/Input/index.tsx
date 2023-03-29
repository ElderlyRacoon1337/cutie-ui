import styled from '@emotion/styled';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import tinycolor from 'tinycolor2';

interface InputProps {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: any;
  value?: any;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  classNameForWrapper?: string;
  styleForWrapper?: React.CSSProperties;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  square?: boolean;
  variant?: 'filled' | 'outlined' | 'underlined' | 'basic';
  message?: string;
  label?: boolean;
  autoFocus?: boolean;
  defaultValue?: any;
  autoComplete?: string;
  minLength?: number;
  maxLength?: number;
  other?: object;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  button?: React.ReactNode;
}

const StyledInput = styled.div`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;

  .row {
    display: flex;
    flex-wrap: nowrap;
  }

  .label {
    position: absolute;
    z-index: 1;
    color: ${(props) => props.variables.textSecondary};
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    border-radius: ${(props) => props.variables.baseBorderRadius};
    font-size: ${(props) => props.variables.fontSizeSmall};
    margin-left: 5px;
    padding-left: 3px;
    padding-right: 3px;
    padding-bottom: 1px;
    top: -8px;
    background-color: ${(props) => props.variables.background};
    font-size: 11px;
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
  }

  input {
    appearance: none;

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
.label {
font-size: 11px;
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
.label {
color: ${props.variables.textSecondary};
top: -15px;
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
    `outline: 1px solid ${props.variables.divider};`}

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
.label {
  margin-left: 0;
  padding-left: 0;
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

outline-color: ${(props) => props.variables.divider}
.label {
    color: ${(props) => props._color};
  }
  ${(props) =>
    props.focused &&
    `border-color:${props._color};
outline-color: ${props._color};
outline-width: 1.5px;
svg {
  color: ${props._color} !important;
}
.label{
  color: ${props._color}
}
`}

  ${(props) => props.styleOverrides};
`;

export const Input: React.FC<InputProps> = ({
  placeholder,
  className,
  style,
  type,
  value,
  onChange,
  classNameForWrapper,
  color = 'primary',
  variant = 'outlined',
  size = 'medium',
  square = false,
  label,
  startIcon,
  endIcon,
  message,
  autoFocus,
  defaultValue,
  autoComplete,
  maxLength,
  other,
  styleForWrapper,
  button,
}) => {
  const [focused, setFocused] = useState(false);
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
  const mode = theme.theme;
  const styleOverrides = theme.styleOverrides.input;

  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }

  return (
    <StyledInput
      styleOverrides={styleOverrides}
      button={button}
      _mode={mode}
      variables={variables}
      _color={color}
      variant={variant}
      size={size}
      square={square}
      startIcon={startIcon}
      endIcon={endIcon}
      className={classNameForWrapper}
      style={styleForWrapper}
      focused={focused}
    >
      {label && focused && <p className={'label'}>{placeholder}</p>}
      <div className={'row'}>
        {startIcon}
        <input
          minLength={maxLength}
          maxLength={maxLength}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          autoFocus={autoFocus}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={className}
          placeholder={label && focused ? '' : placeholder}
          type={type}
          value={value}
          onChange={onChange}
          {...other}
          style={style}
        />
        {endIcon}
        {React.Children.map(button, (child) =>
          React.cloneElement(child, {
            color: color,
            size: size,
          })
        )}
      </div>
      {message && <p className={'message'}>{message}</p>}
    </StyledInput>
  );
};
