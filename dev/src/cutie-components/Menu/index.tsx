import styled from '@emotion/styled';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../ThemeProvider';

interface MenuProps {
  open: boolean;
  anchorEl: any;
  onClose: any;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  other?: object;
  disableScroll?: boolean;
}

const div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
document.body.append(div);
const scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();

const StyledMenu = styled.div`
  position: absolute;
  z-index: 10;
  border-radius: ${(props) => props.variables.baseBorderRadius};
  border: 1px solid ${(props) => props.variables.divider};
  background-color: ${(props) => props.variables.backgroundSecondary};
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
    props.xpos !== 0
      ? `left: ${props.xpos}px;
    top: ${props.ypos}px;`
      : 'display: none;'}
`;

export const Menu: React.FC<MenuProps> = ({
  open,
  anchorEl,
  onClose,
  children,
  className,
  style,
  fullWidth,
  other,
  disableScroll,
}) => {
  const theme = useContext(ThemeContext);
  const variables = theme.variables;
  const menu = useRef<HTMLDivElement | null>(null);
  const [xpos, setXpos] = useState(0);
  const [ypos, setYpos] = useState(0);
  const [widthParent, setWidthParent] = useState(0);
  const prevent = (ev: any) => ev.preventDefault();

  const getAnchorPosition = () => {
    if (anchorEl && menu.current) {
      disableScroll &&
        document.addEventListener('wheel', prevent, { passive: false });
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
        10;
      if (bottomOut < 0) {
        setYpos(anchorPosition.y + window.scrollY - menuPosition.height);
      } else {
        setYpos(anchorPosition.y + window.scrollY + anchorPosition.height);
      }
    }
  };

  useEffect(() => {
    getAnchorPosition();
    return () => {
      document.removeEventListener('wheel', prevent);
      setXpos(0);
      setYpos(0);
    };
  }, [anchorEl, menu.current]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        menu.current &&
        anchorEl &&
        !anchorEl.contains(event.target) &&
        !menu.current.contains(event.target)
      ) {
        onClose(event);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menu.current]);
  return (
    <>
      {open && (
        <StyledMenu
          widthParent={widthParent}
          variables={variables}
          xpos={xpos}
          ypos={ypos}
          ref={menu}
          className={className}
          onClick={(e) => e.stopPropagation()}
          {...other}
          style={style}
        >
          {children}
        </StyledMenu>
      )}
    </>
  );
};
