import styled from '@emotion/styled';
import { useContext } from 'react';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
const StyledSwitch = styled.label`
  border-radius: 20px;
  cursor: pointer;
  float: left;
  overflow: hidden;
  position: relative;
  height: 24px;
  width: 40px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > input[type='checkbox'] {
    opacity: 0;
    position: absolute;
  }

  & > input[type='checkbox'] + span {
    -webkit-transform: translateX(5px);
    -ms-transform: translateX(5px);
    transform: translateX(5px);
  }

  & > input[type='checkbox']:checked + span {
    -webkit-transform: translateX(50%) translateX(-19px);
    -ms-transform: translateX(50%) translateX(-19px);
    transform: translateX(50%) translateX(-19px);
  }

  & > input[type='checkbox']:disabled + span {
    background: #ccc;
  }

  span {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    height: 100%;
    left: -100%;
    position: relative;
    -webkit-transition: 100ms linear;
    -o-transition: 100ms linear;
    transition: 100ms linear;
    width: 200%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  span > span {
    background: #fff;
    border-radius: 50%;
    display: block;
    height: 20px;
    left: calc(50% - 3px);
    position: relative;
    width: 20px;
    z-index: 3;
    -webkit-box-shadow: 0px 3px 2px 0px rgba(black, 0.2);
    box-shadow: 0px 3px 2px 0px rgba(black, 0.2);
  }

  background-color: ${(props) => props._color};
  ${(props) =>
    !props.checked &&
    `background-color: ${props.variables.divider};
  `}

  ${(props) =>
    props.disabled && `background-color: var(--disabled) !important;`}

    ${(props) =>
    props.size == 'small' &&
    `width: 30px;
    height: 18px;
    span > span {
      height: 15px;
      width: 15px;
    }
    & > input[type='checkbox']:checked + span {
      -webkit-transform: translateX(50%) translateX(-14px);
      -ms-transform: translateX(50%) translateX(-14px);
      transform: translateX(50%) translateX(-14px);
    }`}

    ${(props) =>
    props.size == 'large' &&
    `width: 50px;
    height: 30px;
    span > span {
      height: 25px;
      width: 25px;
    }
  
    & > input[type='checkbox']:checked + span {
      -webkit-transform: translateX(50%) translateX(-24px);
      -ms-transform: translateX(50%) translateX(-24px);
      transform: translateX(50%) translateX(-24px);
    }`}
`;
export const Switch = ({
  checked,
  size = 'medium',
  disabled = false,
  color = 'primary',
  onChange,
  other,
  className,
  style,
}) => {
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return /*#__PURE__*/ _jsxs(StyledSwitch, {
    variables: variables,
    _color: color,
    checked: checked,
    disabled: disabled,
    className: className,
    size: size,
    style: style,
    children: [
      /*#__PURE__*/ _jsx('input', {
        onChange: onChange,
        type: 'checkbox',
        checked: checked,
        disabled: disabled,
        ...other,
      }),
      /*#__PURE__*/ _jsx('span', {
        children: /*#__PURE__*/ _jsx('span', {}),
      }),
    ],
  });
};
