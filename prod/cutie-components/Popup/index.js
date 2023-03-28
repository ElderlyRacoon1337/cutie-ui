import styled from '@emotion/styled';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../cutie-utils/ThemeProvider';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
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
`;
export const Popup = ({ open, onClose, children, style, className, other }) => {
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
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
  return /*#__PURE__*/ _jsx(_Fragment, {
    children:
      open &&
      /*#__PURE__*/ _jsx(StyledPopup, {
        variables: variables,
        onClick: onClose,
        children: /*#__PURE__*/ _jsx('div', {
          className: className,
          onClick: (e) => e.stopPropagation(),
          ...other,
          style: style,
          children: children,
        }),
      }),
  });
};
