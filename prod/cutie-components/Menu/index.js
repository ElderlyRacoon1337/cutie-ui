'use strict';

var _styled = _interopRequireDefault(require('@emotion/styled'));
var _react = require('react');
var _ThemeProvider = require('../../cutie-utils/ThemeProvider');
var _variables = require('../../variables');
var _jsxRuntime = require('@emotion/react/jsx-runtime');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
/** @jsxImportSource @emotion/react */

const StyledMenu = _styled.default.div`
  position: absolute;
  z-index: 10;
  border-radius: ${(props) => props.variables.baseBorderRadius};
  border: 1px solid ${(props) => props.variables.divider};
  background-color: ${(props) => props.variables.backgroundBlur};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 7px 0;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  -webkit-box-shadow: ${(props) => props.variables.baseBoxShadow};
  box-shadow: ${(props) => props.variables.baseBoxShadow};
  font-family: ${(props) => props.variables.baseFontFamily};
  list-style: none;
  font-size: ${(props) => props.variables.fontSizeMedium};
  min-width: ${(props) => props.widthParent}px;
  ${(props) =>
    props.xpos !== 0 && props.ypos !== 0
      ? `left: ${props.xpos}px;
    top: ${props.ypos}px;`
      : 'opacity:0;'}
  ${(props) => props.styleOverrides};
`;
function useWindowSize() {
  const [size, setSize] = (0, _react.useState)([0, 0]);
  (0, _react.useLayoutEffect)(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
function ShowWindowDimensions() {
  const [width, height] = useWindowSize();
  return {
    width,
    height,
  };
}
const Menu = ({
  open,
  anchorEl,
  onClose,
  children,
  className,
  sx,
  fullWidth,
  other,
  disableScroll,
}) => {
  const theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = _variables.initialVariables;
  }
  const menu = (0, _react.useRef)(null);
  const [xpos, setXpos] = (0, _react.useState)(0);
  const [ypos, setYpos] = (0, _react.useState)(0);
  const [widthParent, setWidthParent] = (0, _react.useState)(0);
  const prevent = (ev) => ev.preventDefault();
  const styleOverrides = theme.styleOverrides.menu;
  const windowSize = ShowWindowDimensions();
  const getAnchorPosition = () => {
    const div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    document.body.append(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    if (anchorEl && menu.current) {
      disableScroll &&
        document.addEventListener('wheel', prevent, {
          passive: false,
        });
      const anchorPosition = anchorEl.getBoundingClientRect();
      const menuPosition = menu.current.getBoundingClientRect();
      fullWidth && setWidthParent(anchorPosition.width);
      const rightOut =
        window.innerWidth - anchorPosition.left - menuPosition.width;
      if (rightOut < 0) {
        setXpos(anchorPosition.x + rightOut - 5 - scrollWidth);
      } else {
        setXpos(anchorPosition.x);
      }
      const bottomOut =
        window.outerHeight -
        anchorPosition.top -
        menuPosition.height -
        menuPosition.height / 2 -
        20;
      if (bottomOut < 0) {
        setYpos(anchorPosition.y + window.scrollY - menuPosition.height);
      } else {
        setYpos(anchorPosition.y + window.scrollY + anchorPosition.height);
      }
    }
  };
  (0, _react.useEffect)(() => {
    getAnchorPosition();
    return () => {
      document.removeEventListener('wheel', prevent);
      setXpos(0);
      setYpos(0);
    };
  }, [anchorEl, menu.current, windowSize]);
  (0, _react.useEffect)(() => {
    function handleClickOutside(event) {
      if (
        menu.current &&
        anchorEl &&
        !menu.current.contains(event.target) &&
        !anchorEl.contains(event.target)
      ) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menu.current]);
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children:
      open &&
      (0, _jsxRuntime.jsx)(StyledMenu, {
        styleOverrides: styleOverrides,
        widthParent: widthParent,
        variables: variables,
        xpos: xpos,
        ypos: ypos,
        ref: menu,
        className: className,
        onClick: (e) => e.stopPropagation(),
        ...other,
        css: sx,
        children: children,
      }),
  });
};
module.exports = {
  Menu,
};
