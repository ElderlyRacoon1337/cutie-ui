import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';

interface SwitchProps {
  checked?: boolean;
  size?: 'medium' | 'small' | 'large';
  color?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  other?: object;
  onChange?: any;
}

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

const Switch: React.FC<SwitchProps> = ({
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

  return (
    <StyledSwitch
      variables={variables}
      _color={color}
      checked={checked}
      disabled={disabled}
      className={className}
      size={size}
      style={style}
    >
      <input
        onChange={onChange}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        {...other}
      />
      <span>
        <span></span>
      </span>
    </StyledSwitch>
  );
};

export default Switch;
