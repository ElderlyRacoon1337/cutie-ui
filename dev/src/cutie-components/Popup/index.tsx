import styled from '@emotion/styled';
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../ThemeProvider';

interface PopupProps {
  open: boolean;
  className?: string;
  onClose: (event: React.MouseEvent<any, MouseEvent>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  other?: object;
}

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.38);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 10;

  div {
    position: fixed;
    margin: auto;
    padding: 20px;
    background-color: ${(props) => props.variables.backgroundSecondary};
    border-radius: 10px;
    min-width: 400px;
    min-height: 200px;
    z-index: 10;
    font-family: ${(props) => props.variables.baseFontFamily};
    font-size: ${(props) => props.variables.fontSizeMedium};
  }

  ${(props) => props.styleOverrides};
`;

export const Popup: React.FC<PopupProps> = ({
  open,
  onClose,
  children,
  style,
  className,
  other,
}) => {
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
  const styleOverrides = theme.styleOverrides.popup;

  const prevent = (ev: any) => ev.preventDefault();
  useEffect(() => {
    if (open) {
      document.addEventListener('wheel', prevent, { passive: false });
    }
    return () => {
      document.removeEventListener('wheel', prevent);
    };
  }, [open]);

  return (
    <>
      {open && (
        <StyledPopup
          styleOverrides={styleOverrides}
          variables={variables}
          onClick={onClose}
        >
          <div
            className={className}
            onClick={(e) => e.stopPropagation()}
            {...other}
            style={style}
          >
            {children}
          </div>
        </StyledPopup>
      )}
    </>
  );
};
