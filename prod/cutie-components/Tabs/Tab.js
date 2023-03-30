import { jsx as _jsx } from '@emotion/react/jsx-runtime';
/** @jsxImportSource @emotion/react */
export const Tab = ({ children, className, other, sx }) => {
  return _jsx('div', {
    className: className,
    css: sx,
    ...other,
    children: children,
  });
};
