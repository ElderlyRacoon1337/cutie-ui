import styled from '@emotion/styled';
import React, { useContext } from 'react';
import tinycolor from 'tinycolor2';
import { ThemeContext } from '../../ThemeProvider';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */

interface TabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  children?: React.ReactNode;
  labels: React.ReactNode;
  className?: string;
  sx?: React.CSSProperties | object;
  other?: object;
  variant?: 'contained' | 'underlined';
  fullWidth?: boolean;
  rounded?: boolean;
  circle?: boolean;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

const StyledTabsWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  ${(props) => props.styleOverrides};
`;

const StyledTabs = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: ${(props) => props.variables.baseFontFamily};
  font-size: ${(props) => props.variables.fontSizeMedium};
`;

const StyledTab = styled.div`
  border-bottom: 2px solid transparent;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: ${(props) => props.variables.baseFontFamily};

  &:hover {
    background-color: ${tinycolor('#000').setAlpha(0.04).toString()};
  }
  &:active {
    background-color: ${tinycolor('#000').setAlpha(0.06).toString()};
  }

  ${(props) =>
    props._mode == 'dark' &&
    `&:hover {
  background-color: ${tinycolor('#fff').setAlpha(0.07).toString()};
}
&:active {
  background-color: ${tinycolor('#fff').setAlpha(0.1).toString()};
}`}

  ${(props) =>
    props.fullWidth &&
    `-webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  `}

  ${(props) =>
    props.size == 'small' &&
    `padding: 7px 12px;
  font-size: ${props.variables.fontSizeSmall}`};
  ${(props) =>
    props.size == 'medium' &&
    `padding: 10px 15px;
  font-size: ${props.variables.fontSizeMedium}`};
  ${(props) =>
    props.size == 'large' &&
    `padding: 12px 22px;
  font-size: ${props.variables.fontSizeLarge}`};

  ${(props) => props.rounded && `border-radius: 10px;`}
  ${(props) => props.circle && `border-radius: 20px;`}

  ${(props) =>
    props.i == props.value - 1 &&
    props.variant == 'contained' &&
    `background-color: ${props._color};
  color: ${
    tinycolor(props._color).isLight()
      ? props.variables.black
      : props.variables.white
  };
  &:hover{
    background-color: ${props._color};
  color: ${
    tinycolor(props._color).isLight()
      ? props.variables.black
      : props.variables.white
  };
  $:active{
    background-color: ${props._color};
  color: ${
    tinycolor(props._color).isLight()
      ? props.variables.black
      : props.variables.white
  };}
  }
  `}

  ${(props) =>
    props.i == props.value - 1 &&
    props.variant == 'underlined' &&
    `border-color: ${props._color};
  color:${props.variables.textPrimary};
  background-color:transparent;
  `}
`;

export const Tabs: React.FC<TabsProps> = ({
  value,
  onChange,
  labels,
  children,
  className,
  variant = 'underlined',
  color = 'primary',
  size = 'medium',
  fullWidth,
  rounded,
  circle,
  sx,
}: any) => {
  const theme = useContext(ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }
  const mode = theme.theme;
  const styleOverrides = theme.styleOverrides.tabs;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }

  return (
    <StyledTabsWrapper className="CuteTabs-wrapper">
      <StyledTabs variables={variables} className={className}>
        {labels?.map((el: any, i: number) => (
          <StyledTab
            styleOverrides={styleOverrides}
            css={sx}
            variant={variant}
            fullWidth={fullWidth}
            _mode={mode}
            _color={color}
            size={size}
            variables={variables}
            rounded={rounded}
            circle={circle}
            i={i}
            key={i}
            value={value}
            onClick={(e) => onChange(e, i + 1)}
          >
            {el}
          </StyledTab>
        ))}
      </StyledTabs>
      <div>{Array.from(children)?.filter((el: any, i) => i + 1 == value)}</div>
    </StyledTabsWrapper>
  );
};
