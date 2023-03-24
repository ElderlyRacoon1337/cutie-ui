import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Menu.module.scss';

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

  useEffect(() => {
    getAnchorPosition();

    return () => {
      document.removeEventListener('wheel', prevent);
      setXpos(0);
      setYpos(0);
    };
  }, [anchorEl, menu.current]);

  return (
    <>
      {open && (
        <div
          ref={menu}
          className={clsx(styles.CuteMenu, className)}
          onClick={(e) => e.stopPropagation()}
          {...other}
          style={
            xpos !== 0
              ? {
                  left: xpos + 'px',
                  top: ypos + 'px',
                  minWidth: widthParent,
                  ...style,
                }
              : { visibility: 'hidden', ...style }
          }
        >
          {children}
        </div>
      )}
    </>
  );
};
