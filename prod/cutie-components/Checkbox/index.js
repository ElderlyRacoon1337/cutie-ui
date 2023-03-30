import styled from '@emotion/styled';
import { useContext, useRef } from 'react';
import tinycolor from 'tinycolor2';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import { Icon } from '../Icon';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */
import { jsx as _jsx } from '@emotion/react/jsx-runtime';
import { jsxs as _jsxs } from '@emotion/react/jsx-runtime';
const StyledCheckbox = styled.div`
  div {
    position: relative;
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

  width: fit-content;
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
    input[type='checkbox']{
    border-color: ${props.variables.disabled};
      cursor: not-allowed;
    }
  `}

  ${(props) => props.styleOverrides};
`;
export const Checkbox = ({
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
  return _jsxs(StyledCheckbox, {
    styleOverrides: styleOverrides,
    onClick: (e) => ref.current.click(),
    _color: color,
    variables: variables,
    size: size,
    _width: width,
    _disabled: disabled,
    css: sx,
    ...other,
    className: className,
    children: [
      _jsxs('div', {
        onClick: (e) => ref.current.click(),
        children: [
          _jsx('input', {
            disabled: disabled,
            width: width,
            ref: ref,
            checked: checked,
            onClick: onClick,
            onChange: onChange,
            type: 'checkbox',
          }),
          checked &&
            _jsx(Icon, {
              onClick: (e) => ref.current.click(),
              fontSize: width
                ? width
                : size == 'small'
                ? '0.9rem'
                : size == 'medium'
                ? '1rem'
                : '1.2rem',
              children: _jsxs('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                id: 'check',
                children: [
                  _jsx('rect', {
                    width: '256',
                    height: '256',
                    fill: 'none',
                  }),
                  _jsx('polyline', {
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '24',
                    points: '216 72.005 104 184 48 128.005',
                  }),
                ],
              }),
            }),
        ],
      }),
      _jsx('label', {
        children: label,
      }),
    ],
  });
};
