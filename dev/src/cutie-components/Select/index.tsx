import styled from '@emotion/styled';
import React, { useContext, useRef } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { Icon } from '../Icon';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */

const StyledSelect = styled.select`
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  padding-right: 30px;
  border-color: ${(props) => props.variables.divider};
  color: ${(props) => props.variables.textPrimary};
  font-size: ${(props) => props.variables.fontSizeMedium};
  appearance: none;
  background-color: transparent;
  width: 100%;
  cursor: pointer;
`;

const SelectWrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    right: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
  }

  ${(props) => props.styleOverrides};
`;

interface SelectProps {
  children: React.ReactNode;
  className?: string;
  sx?: React.CSSProperties | object;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onClick?: React.MouseEventHandler<HTMLSelectElement>;
}

export const Select: React.FC<SelectProps> = ({
  children,
  className,
  sx,
  onChange,
  onClick,
}) => {
  const theme = useContext(ThemeContext);
  const selectRef = useRef(null);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }
  const styleOverrides = theme.styleOverrides.select;

  return (
    <SelectWrapper
      styleOverrides={styleOverrides}
      className={className}
      css={sx}
      ref={selectRef}
    >
      <StyledSelect variables={variables} onClick={onClick} onChange={onChange}>
        {children}
      </StyledSelect>
      <Icon fontSize={'1rem'} onClick={(e) => selectRef.current.click()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Icon>
    </SelectWrapper>
  );
};
