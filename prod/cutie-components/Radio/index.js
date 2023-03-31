import { useContext, useRef } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */
import { jsx as _jsx } from '@emotion/react/jsx-runtime';
import { jsxs as _jsxs } from '@emotion/react/jsx-runtime';
const StyledRadio = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    opacity: 0;
    appearance: none;
  }

  span {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: 1px solid ${(props) => props.variables.divider};
    border-radius: 50%;
  }

  label {
    margin-left: 0.5rem;
    font-family: ${(props) => props.variables.baseFontFamily};
    font-size: ${(props) => props.variables.fontSizeMedium};

    ${(props) =>
      props.size == 'small' && `font-size: ${props.variables.fontSizeSmall};`}
    ${(props) =>
      props.size == 'large' && `font-size: ${props.variables.fontSizeLarge};`}
  }

  ${(props) =>
    props.size == 'medium' &&
    `span {width:1.12rem; height:1.12rem;}
    `}

  ${(props) => props.size == 'small' && `span {width:1rem; height:1rem;}`}

  ${(props) => props.size == 'large' && `span {width:1.3rem; height:1.3rem;}`}

    ${(props) =>
    props._width && `span {width: ${props._width}; height: ${props._width};}`}
  

  ${(props) =>
    props._checked &&
    `span{
      border-color: ${props._color};
    }
    span::after {
    background: ${props._color};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 70%;
    height: 70%;
    border-radius: 50%;
  }
  `}

  ${(props) =>
    props._disabled &&
    `span {
    border-color: ${props.variables.disabled};
    cursor: not-allowed;
  }
  span::after {
    background: ${props.variables.disabled};
    cursor: not-allowed;
  }
  `}

  ${(props) => props.styleOverrides};
`;
export const Radio = ({
  onChange,
  currentValue,
  value,
  color = 'primary',
  size = 'medium',
  disabled,
  width,
  label,
  className,
  other,
  sx,
}) => {
  const inputRef = useRef(null);
  const theme = useContext(ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }
  const styleOverrides = theme.styleOverrides.radio;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return _jsxs(StyledRadio, {
    styleOverrides: styleOverrides,
    onClick: (e) => inputRef.current.click(),
    variables: variables,
    _width: width,
    _disabled: disabled,
    size: size,
    _checked: value == currentValue,
    _color: color,
    css: sx,
    className: className,
    ...other,
    children: [
      _jsx('span', {}),
      _jsx('input', {
        disabled: disabled,
        name: 'radio',
        value: value,
        checked: value == currentValue,
        ref: inputRef,
        onChange: onChange,
        type: 'radio',
      }),
      _jsx('label', {
        children: label,
      }),
    ],
  });
};
