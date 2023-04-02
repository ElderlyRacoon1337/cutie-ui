'use strict';

var _styled = _interopRequireDefault(require('@emotion/styled'));
var _react = _interopRequireWildcard(require('react'));
var _ThemeProvider = require('../../cutie-utils/ThemeProvider');
var _tinycolor = _interopRequireDefault(require('tinycolor2'));
var _variables = require('../../variables');
var _jsxRuntime = require('@emotion/react/jsx-runtime');
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
/** @jsxImportSource @emotion/react */

const StyledInput = _styled.default.div`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  .row {
    display: flex;
    flex-wrap: nowrap;
  }
  .message {
    font-size: ${(props) => props.variables.fontSizeSmall};
    margin-left: 10px;
    position: absolute;
    color: ${(props) => props.variables.textSecondary};
    font-size: 12px;
    bottom: -20px;
  }

  button {
    border-bottom-left-radius: 0 !important;
    border-top-left-radius: 0 !important;
    transition: none;
    margin-left: auto;
  }

  input {
    appearance: none;
    flex: 1;
    outline: none;
    border: none;
    background-color: transparent;
    color: ${(props) => props.variables.textPrimary};
    font-family: ${(props) => props.variables.baseFontFamily};
    font-size: ${(props) => props.variables.fontSizeMedium};
  }

  ${(props) =>
    props.square &&
    `border-radius: 0 !important;
button {
border-radius: 0 !important;
}
`}

  ${(props) =>
    props.startIcon &&
    !props.endIcon &&
    `.row {
  display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
& > svg {
  color: ${props.variables.textSecondary};
  margin-left: 8px;
}


}`}

${(props) =>
  props.endIcon &&
  !props.startIcon &&
  `.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  & > svg {
    color: ${props.variables.textSecondary};
    margin-right: 8px;
  }

}`}

${(props) =>
  props.endIcon &&
  props.startIcon &&
  `.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  & > svg:nth-of-type(1) {
    color:${props.variables.textSecondary};
    margin-left: 8px;
  }
 
  & > svg:nth-of-type(2) {
    color: ${props.variables.textSecondary};
    margin-right: 8px;
  }
  }`}

  ${(props) =>
    props.size == 'small' &&
    `font-size: ${props.variables.fontSizeSmall};
border-radius: 5px;
input {
padding: 6px 6px;
}

button {
border-radius: 5px;
}`}

${(props) =>
  props.size == 'medium' &&
  `font-size: ${props.variables.fontSizeMedium};
border-radius: ${props.variables.baseBorderRadius};
input {
  padding: 8px 10px;
  ${props.button && 'padding-right: 5px;'}
}`}

${(props) =>
  props.size == 'large' &&
  `font-size: ${props.variables.fontSizeLarge};
border-radius: ${props.variables.baseBorderRadius};
input {
  padding: 10px 12px;
  ${props.button && 'padding-right: 7px;'}
}`}

${(props) =>
  props.variant == 'filled' &&
  `border-bottom: 1.5px solid ${props.variables.divider};
border-radius: 0;
background-color: ${(0, _tinycolor.default)('black').setAlpha(0.06).toString()};
input {
background-color: transparent;
}
svg {
color: ${props.variables.textSecondary};
}
button {
border-radius: 0;
}
`}

${(props) =>
  props.variant == 'filled' &&
  props._mode == 'dark' &&
  `background-color: ${(0, _tinycolor.default)('white')
    .setAlpha(0.06)
    .toString()};
    `}

${(props) =>
  props.variant == 'outlined' &&
  `
    // border: 1px solid ${props.variables.divider};
    box-shadow:0 0 0 1px ${props.variables.divider};
    button {
      border-radius: 0;
    }
    `}

${(props) =>
  props.variant == 'underlined' &&
  `border-radius: 0;
border: none;
border-bottom: 1.5px solid ${props.variables.divider};
input {
  border: none;
  padding-left: 0;
  padding-right: 0;
}
.message {
  margin-left: 0;
}

button {
  border-radius: 0;
}
`}

${(props) =>
  props.variant == 'basic' &&
  `border-radius: 0;
    button{
      border-radius:0;
    }
input {
  border: none;
  padding-left: 0;
  padding-right: 0;
}`}

  ${(props) =>
    props.focused &&
    `border-color:${props._color};
svg {
  color: ${props._color} !important;
}
`}

${(props) =>
  props.focused &&
  props.variant == 'outlined' &&
  `border-color:${props._color};
    box-shadow:0 0 0 1.5px ${props._color};
svg {
color: ${props._color} !important;
}
`}

  ${(props) => props.styleOverrides};
`;
const Input = ({
  placeholder,
  className,
  sx,
  type,
  value,
  onChange,
  color = 'primary',
  variant = 'outlined',
  size = 'medium',
  square = false,
  startIcon,
  endIcon,
  message,
  autoFocus,
  defaultValue,
  autoComplete,
  maxLength,
  other,
  button,
}) => {
  const [focused, setFocused] = (0, _react.useState)(false);
  const theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  let variables = theme.variables;
  if (Object.keys(variables).length === 0) {
    variables = _variables.initialVariables;
  }
  const mode = theme.theme;
  const styleOverrides = theme.styleOverrides.input;
  if (Object.keys(variables).includes(color)) {
    color = variables[color];
  }
  return (0, _jsxRuntime.jsxs)(StyledInput, {
    styleOverrides: styleOverrides,
    button: button,
    _mode: mode,
    variables: variables,
    _color: color,
    variant: variant,
    size: size,
    square: square,
    startIcon: startIcon,
    endIcon: endIcon,
    className: className,
    css: sx,
    focused: focused,
    children: [
      (0, _jsxRuntime.jsxs)('div', {
        className: 'row',
        children: [
          startIcon,
          (0, _jsxRuntime.jsx)('input', {
            minLength: maxLength,
            maxLength: maxLength,
            autoComplete: autoComplete,
            defaultValue: defaultValue,
            autoFocus: autoFocus,
            onFocus: () => setFocused(true),
            onBlur: () => setFocused(false),
            placeholder: placeholder,
            type: type,
            value: value,
            onChange: onChange,
            ...other,
          }),
          endIcon,
          _react.default.Children.map(button, (child) =>
            /*#__PURE__*/ _react.default.cloneElement(child, {
              color: color,
              size: size,
            })
          ),
        ],
      }),
      message &&
        (0, _jsxRuntime.jsx)('p', {
          className: 'message',
          children: message,
        }),
    ],
  });
};
module.exports = {
  Input,
};
