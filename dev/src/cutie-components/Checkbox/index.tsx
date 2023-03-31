import styled from '@emotion/styled';
import React, { useContext, useRef } from 'react';
import tinycolor from 'tinycolor2';
import { ThemeContext } from '../../ThemeProvider';
import { Icon } from '../Icon';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */

const StyledCheckbox = styled.div`
  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  cursor: pointer;

  label {
    margin-left: 0.5rem;
    font-family: ${(props) => props.variables.baseFontFamily};
    font-size: ${(props) => props.variables.fontSizeMedium};

    ${(props) =>
      props.size == 'small' && `font-size: ${props.variables.fontSizeSmall};`}
    ${(props) =>
      props.size == 'large' && `font-size: ${props.variables.fontSizeLarge};`}
  }

  display: flex;
  input[type='checkbox'] {
    appearance: none;
    margin: 0;
    color: currentColor;
    width: ${(props) => props.variables.size};
    height: ${(props) => props.variables.size};
    border: 1.5px solid ${(props) => props.variables.divider};
    border-radius: 0.15em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
  }

  input[type='checkbox']:checked {
    border: 1.5px solid ${(props) => props._color};
    background-color: ${(props) => props._color};
  }

  ${(props) =>
    props.size == 'medium' &&
    `input[type='checkbox'] {width:1rem; height:1rem;}
    `}

  ${(props) =>
    props.size == 'small' &&
    `input[type='checkbox'] {width:0.9rem; height:0.9rem;}`}

      ${(props) =>
    props.size == 'large' &&
    `input[type='checkbox'] {width:1.2rem; height:1.2rem;}`}

    ${(props) =>
    props._width &&
    `input[type='checkbox'] {width: ${props._width}; height: ${props._width};}`}
  
    
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    color: ${(props) =>
      tinycolor(props._color).isLight() ? 'black' : 'white'};
  }

  ${(props) =>
    props._disabled &&
    `
    cursor: not-allowed;
    input[type='checkbox']{
    border-color: ${props.variables.disabled};
      cursor: not-allowed;
    }
    input[type='checkbox']:checked{
      border-color: ${props.variables.disabled};
      background-color: ${props.variables.disabled};
      cursor: not-allowed;
      }
  `}

  ${(props) => props.styleOverrides};
`;

interface CheckboxProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  sx?: React.CSSProperties | object;
  className?: string;
  other?: object;
  width?: string;
  disabled?: boolean;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  size = 'medium',
  width,
  color = 'primary',
  sx,
  className,
  other,
  checked = false,
  disabled,
  onChange,
  onClick,
  label,
}) => {
  const theme = useContext(ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }
  const ref = useRef(null);
  const styleOverrides = theme.styleOverrides.checkbox;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }

  return (
    <StyledCheckbox
      styleOverrides={styleOverrides}
      onClick={(e) => ref.current.click()}
      _color={color}
      variables={variables}
      size={size}
      _width={width}
      _disabled={disabled}
      css={sx}
      {...other}
      className={className}
    >
      <div onClick={(e) => ref.current.click()}>
        <input
          disabled={disabled}
          width={width}
          ref={ref}
          checked={checked}
          onClick={onClick}
          onChange={onChange}
          type="checkbox"
        />
        {checked && (
          <Icon
            onClick={(e) => ref.current.click()}
            fontSize={
              width
                ? width
                : size == 'small'
                ? '0.9rem'
                : size == 'medium'
                ? '1rem'
                : '1.2rem'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              id="check"
            >
              <rect width="256" height="256" fill="none"></rect>
              <polyline
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
                points="216 72.005 104 184 48 128.005"
              ></polyline>
            </svg>
          </Icon>
        )}
      </div>
      {label && <label>{label}</label>}
    </StyledCheckbox>
  );
};
