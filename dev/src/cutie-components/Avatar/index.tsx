import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../ThemeProvider';
/** @jsxImportSource @emotion/react */

interface AvatarProps {
  variant?: 'rounded' | 'square' | 'circular';
  className?: string;
  src: string;
  sx?: React.CSSProperties | object;
  onClick?: (event: React.MouseEvent<any>) => void;
  other?: object;
  width?: string | number;
}

const StyledAvatar = styled.div`
  width: ${(props) => props._width};
  aspect-ratio: 1 / 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.variant == 'square' && `border-radius: 0;`}
  ${(props) => props.variant == 'circular' && `border-radius: 50%;`}
${(props) => props.variant == 'rounded' && `border-radius: 20%;`}

background-image: url(${(props) => props._src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${(props) => props.styleOverrides};
`;

export const Avatar: React.FC<AvatarProps> = ({
  variant = 'circular',
  className,
  src,
  sx,
  onClick,
  other,
  width = '40px',
}) => {
  let theme = useContext(ThemeContext);
  const styleOverrides = theme.styleOverrides.avatar;
  return (
    <StyledAvatar
      styleOverrides={styleOverrides}
      _width={width}
      variant={variant}
      className={className}
      css={sx}
      _src={src}
      onClick={onClick}
      {...other}
    />
  );
};
