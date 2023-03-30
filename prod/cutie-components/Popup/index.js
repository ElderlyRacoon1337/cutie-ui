import styled from '@emotion/styled';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import { initialVariables } from '../../variables';
/** @jsxImportSource @emotion/react */
import { jsx as _jsx } from '@emotion/react/jsx-runtime';
import { Fragment as _Fragment } from '@emotion/react/jsx-runtime';
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
export const Popup = ({ open, onClose, children, sx, className, other }) => {
  const theme = useContext(ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = initialVariables;
  }
  const styleOverrides = theme.styleOverrides.popup;
  const prevent = (ev) => ev.preventDefault();
  useEffect(() => {
    if (open) {
      document.addEventListener('wheel', prevent, {
        passive: false,
      });
    }
    return () => {
      document.removeEventListener('wheel', prevent);
    };
  }, [open]);
  return _jsx(_Fragment, {
    children:
      open &&
      _jsx(StyledPopup, {
        styleOverrides: styleOverrides,
        variables: variables,
        onClick: onClose,
        children: _jsx('div', {
          className: className,
          onClick: (e) => e.stopPropagation(),
          ...other,
          css: sx,
          children: children,
        }),
      }),
  });
};
