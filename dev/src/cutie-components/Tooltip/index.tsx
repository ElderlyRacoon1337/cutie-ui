import styled from '@emotion/styled';
import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */

interface TooltipProps {
  anchorEl: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children?: React.ReactNode;
  className?: string;
  sx?: React.CSSProperties | object;
}

const StyledTooltip = styled.span`
  position: absolute;
  background-color: ${(props) => props.variables.backgroundBlur};
  padding: 5px;
  border-radius: 7px;
  backdrop-filter: blur(7px);
  font-size: ${(props) => props.variables.fontSizeSmall};
  font-size: 11px;
  border: 1px solid ${(props) => props.variables.divider};
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 300px;
  z-index: 20;
  ${(props) =>
    props.ypos !== 0 && props.xpos !== 0
      ? `top: ${props.ypos}px;
  left: ${props.xpos}px;`
      : 'opacity:0;left:-2000px;'}
  &:hover {
    transition: 2s;
  }

  ${(props) => props.styleOverrides};
`;

export const Tooltip: React.FC<TooltipProps> = ({
  anchorEl,
  position = 'top',
  children,
  sx,
  className,
}) => {
  const [xpos, setXpos] = useState(0);
  const [ypos, setYpos] = useState(0);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const theme = useContext(ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }
  const styleOverrides = theme.styleOverrides.tooltip;

  const getPosition = () => {
    if (anchorEl && tooltipRef.current) {
      const anchorData = anchorEl.getBoundingClientRect();
      const tooltipData = tooltipRef.current.getBoundingClientRect();

      position == 'top' &&
        setYpos(window.scrollY + anchorData.y - tooltipData.height - 5);
      position == 'top' &&
        setXpos(anchorData.x + anchorData.width / 2 - tooltipData.width / 2);

      position == 'bottom' &&
        setYpos(window.scrollY + anchorData.y + anchorData.height + 5);
      position == 'bottom' &&
        setXpos(anchorData.x + anchorData.width / 2 - tooltipData.width / 2);

      position == 'left' &&
        setYpos(
          window.scrollY +
            anchorData.y +
            anchorData.height / 2 -
            tooltipData.height / 2
        );
      position == 'left' && setXpos(anchorData.x - tooltipData.width - 5);

      position == 'right' &&
        setYpos(
          window.scrollY +
            anchorData.y +
            anchorData.height / 2 -
            tooltipData.height / 2
        );
      position == 'right' && setXpos(anchorData.x + anchorData.width + 5);
    }
  };

  useEffect(() => {
    getPosition();
    return () => {
      setXpos(0);
      setYpos(0);
    };
  }, [anchorEl]);

  return (
    <StyledTooltip
      styleOverrides={styleOverrides}
      xpos={xpos}
      ypos={ypos}
      variables={variables}
      ref={tooltipRef}
      className={className}
      css={sx}
    >
      {children}
    </StyledTooltip>
  );
};
