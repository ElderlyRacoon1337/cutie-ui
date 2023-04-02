'use strict';

var _styled = _interopRequireDefault(require('@emotion/styled'));
var _react = require('react');
var _tinycolor = _interopRequireDefault(require('tinycolor2'));
var _ThemeProvider = require('../../cutie-utils/ThemeProvider');
var _variables = require('../../variables');
var _jsxRuntime = require('@emotion/react/jsx-runtime');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
/** @jsxImportSource @emotion/react */

const StyledTabsWrapper = _styled.default.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  ${(props) => props.styleOverrides};
`;
const StyledTabs = _styled.default.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: ${(props) => props.variables.baseFontFamily};
  font-size: ${(props) => props.variables.fontSizeMedium};
`;
const StyledTab = _styled.default.div`
  border-bottom: 2px solid transparent;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: ${(props) => props.variables.baseFontFamily};

  &:hover {
    background-color: ${(0, _tinycolor.default)('#000')
      .setAlpha(0.04)
      .toString()};
  }
  &:active {
    background-color: ${(0, _tinycolor.default)('#000')
      .setAlpha(0.06)
      .toString()};
  }

  ${(props) =>
    props._mode == 'dark' &&
    `&:hover {
  background-color: ${(0, _tinycolor.default)('#fff')
    .setAlpha(0.07)
    .toString()};
}
&:active {
  background-color: ${(0, _tinycolor.default)('#fff').setAlpha(0.1).toString()};
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
    (0, _tinycolor.default)(props._color).isLight()
      ? props.variables.black
      : props.variables.white
  };
  &:hover{
    background-color: ${props._color};
  color: ${
    (0, _tinycolor.default)(props._color).isLight()
      ? props.variables.black
      : props.variables.white
  };
  $:active{
    background-color: ${props._color};
  color: ${
    (0, _tinycolor.default)(props._color).isLight()
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
const Tabs = ({
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
}) => {
  var _Array$from;
  const theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = _variables.initialVariables;
  }
  const mode = theme.theme;
  const styleOverrides = theme.styleOverrides.tabs;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return (0, _jsxRuntime.jsxs)(StyledTabsWrapper, {
    className: 'CuteTabs-wrapper',
    children: [
      (0, _jsxRuntime.jsx)(StyledTabs, {
        className: className,
        variables: variables,
        children:
          labels === null || labels === void 0
            ? void 0
            : labels.map((el, i) =>
                (0, _jsxRuntime.jsx)(
                  StyledTab,
                  {
                    styleOverrides: styleOverrides,
                    css: sx,
                    variant: variant,
                    fullWidth: fullWidth,
                    _mode: mode,
                    _color: color,
                    size: size,
                    variables: variables,
                    rounded: rounded,
                    circle: circle,
                    i: i,
                    value: value,
                    onClick: (e) => onChange(e, i + 1),
                    children: el,
                  },
                  i
                )
              ),
      }),
      (0, _jsxRuntime.jsx)('div', {
        children:
          (_Array$from = Array.from(children)) === null ||
          _Array$from === void 0
            ? void 0
            : _Array$from.filter((el, i) => i + 1 == value),
      }),
    ],
  });
};
module.exports = {
  Tabs,
};
