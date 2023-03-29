import styled from '@emotion/styled';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { Icon } from '../Icon';

const StyledSelect = styled.select`
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  padding-right: 30px;
  border-color: var(--divider);
  color: var(--textPrimary);
  font-size: var(--fontSizeMedium);
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
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

export const Select: React.FC<SelectProps> = ({
  children,
  className,
  style,
  onChange,
}) => {
  const selectRef = useRef(null);
  const theme = useContext(ThemeContext);
  const styleOverrides = theme.styleOverrides.select;

  return (
    <SelectWrapper
      styleOverrides={styleOverrides}
      className={className}
      style={style}
      ref={selectRef}
    >
      <StyledSelect onChange={onChange}>{children}</StyledSelect>
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
