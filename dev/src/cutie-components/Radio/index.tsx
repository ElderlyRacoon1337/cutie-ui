import React, { useContext, useRef } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../ThemeProvider';

const StyledRadio = styled.div`
  width: fit-content;
  display: flex;

  input {
    opacity: 0;
    cursor: pointer;
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
    `span {width:1.1rem; height:1.1rem;}
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

interface RadioProps {
  onChange: any;
  currentValue: string;
  value: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  width?: string | number;
  disabled?: boolean;
  label?: string;
  style?: React.CSSProperties;
  className?: string;
  other?: object;
}

export const Radio: React.FC<RadioProps> = ({
  onChange,
  currentValue,
  value,
  color = 'primary',
  size = 'medium',
  disabled,
  width,
  label,
  style,
  className,
  other,
}) => {
  const inputRef = useRef(null);
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
  const styleOverrides = theme.styleOverrides.radio;

  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }

  return (
    <StyledRadio
      styleOverrides={styleOverrides}
      onClick={(e) => inputRef.current.click()}
      variables={variables}
      _width={width}
      _disabled={disabled}
      size={size}
      _checked={value == currentValue}
      _color={color}
      style={style}
      className={className}
      {...other}
    >
      <span />
      <input
        disabled={disabled}
        name="radio"
        value={value}
        checked={value == currentValue}
        ref={inputRef}
        onChange={onChange}
        type="radio"
      />
      <label>{label}</label>
    </StyledRadio>
  );
};
