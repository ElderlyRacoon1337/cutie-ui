var _jsxRuntime = require('react/jsx-runtime');
const { clsx } = require('clsx');
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
}) => {
  var _Array$from;
  return /*#__PURE__*/ (0, _jsxRuntime.jsxs)('div', {
    className: 'CuteTabs-wrapper',
    children: [
      /*#__PURE__*/ (0, _jsxRuntime.jsx)('div', {
        className: clsx(
          'CuteTabs',
          fullWidth && 'CuteTabs-fullWidth',
          className
        ),
        children:
          labels === null || labels === void 0
            ? void 0
            : labels.map((el, i) =>
                /*#__PURE__*/ (0, _jsxRuntime.jsx)(
                  'div',
                  {
                    onClick: (e) => onChange(e, i + 1),
                    className: clsx(
                      'CuteTab',
                      i == value - 1 && `CuteTab-active-${variant}-${color}`,
                      rounded && 'CuteTab-rounded',
                      circle && 'CuteTab-circle',
                      `CuteTabs-${size}`
                    ),
                    children: el,
                  },
                  i
                )
              ),
      }),
      /*#__PURE__*/ (0, _jsxRuntime.jsx)('div', {
        className: 'CutePanels',
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
