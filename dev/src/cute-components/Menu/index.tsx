import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Menu.module.scss';

interface MenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: (event: React.MouseEvent<any, MouseEvent>) => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  other?: object;
}

export const Menu: React.FC<MenuProps> = ({
  open,
  anchorEl,
  onClose,
  children,
  className,
  style,
  fullWidth,
  other,
}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [widthParent, setWidthParent] = useState(0);
  const menu = useRef<HTMLUListElement | null>(null);

  const prevent = (ev: any) => ev.preventDefault();

  const setActualValues = () => {
    if (anchorEl && menu.current) {
      // document.body.style.overflow = 'hidden';
      document.addEventListener('wheel', prevent, { passive: false });
      const clicked = anchorEl.getBoundingClientRect();
      const menuEl = menu.current.getBoundingClientRect();
      fullWidth && setWidthParent(clicked.width);
      const rightOut = window.innerWidth - clicked.left - menuEl.width;
      if (rightOut < 0) {
        setWidth(clicked.x + rightOut - 10);
      } else {
        setWidth(clicked.x);
      }
      const bottomOut = window.innerHeight - clicked.top - menuEl.height - 50;
      if (bottomOut < 0) {
        setHeight(
          clicked.y + bottomOut + 40 - (window.innerHeight - clicked.y)
        );
      } else {
        setHeight(clicked.y + clicked.height + 3);
      }
    }
  };

  useEffect(() => {
    setActualValues();
    return () => {
      setHeight(0);
      setWidth(0);
      setWidthParent(0);
      // document.body.style.overflow = '';
      document.removeEventListener('wheel', prevent);
    };
  }, [anchorEl]);

  return (
    <>
      {open && (
        <div className={styles.CuteMenuBackground} onClick={onClose}>
          <ul
            ref={menu}
            className={clsx(styles.CuteMenu, className)}
            onClick={(e) => e.stopPropagation()}
            {...other}
            style={
              height == 0
                ? { visibility: 'hidden', minWidth: widthParent }
                : {
                    top: `${height}px`,
                    left: `${width}px`,
                    minWidth: widthParent,
                    ...style,
                  }
            }
          >
            {children}
          </ul>
        </div>
      )}
    </>
  );
};
