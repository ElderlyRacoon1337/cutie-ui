import styled from '@emotion/styled';
import { jsx as _jsx } from 'react/jsx-runtime';
const StyledAvatar = styled.div`
  width: ${(props) => props._width};
  aspect-ratio: 1 / 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    width: auto;
  }
  ${(props) => props.variant == 'square' && `border-radius: 0;`}
  ${(props) => props.variant == 'circular' && `border-radius: 50%;`}
${(props) => props.variant == 'rounded' && `border-radius: 20%;`}
`;
export const Avatar = ({
  variant = 'circular',
  className,
  src,
  style,
  onClick,
  other,
  width = '40px',
}) => {
  return /*#__PURE__*/ _jsx(StyledAvatar, {
    _width: width,
    variant: variant,
    className: className,
    style: style,
    onClick: onClick,
    ...other,
    children: /*#__PURE__*/ _jsx('img', {
      src: src,
      alt: 'Avatar',
    }),
  });
};
