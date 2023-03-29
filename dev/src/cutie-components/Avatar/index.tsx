import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../ThemeProvider';

interface AvatarProps {
  variant?: 'rounded' | 'square' | 'circular';
  className?: string;
  src: string;
  style?: React.CSSProperties;
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
  img {
    height: 100%;
    width: auto;
  }
  ${(props) => props.variant == 'square' && `border-radius: 0;`}
  ${(props) => props.variant == 'circular' && `border-radius: 50%;`}
${(props) => props.variant == 'rounded' && `border-radius: 20%;`}

${(props) => props.styleOverrides};
`;

export const Avatar: React.FC<AvatarProps> = ({
  variant = 'circular',
  className,
  src,
  style,
  onClick,
  other,
  width = '40px',
}) => {
  const theme = useContext(ThemeContext);
  const styleOverrides = theme.styleOverrides.avatar;
  return (
    <StyledAvatar
      styleOverrides={styleOverrides}
      _width={width}
      variant={variant}
      className={className}
      style={style}
      onClick={onClick}
      {...other}
    >
      <img src={src} alt="Avatar" />
    </StyledAvatar>
  );
};
