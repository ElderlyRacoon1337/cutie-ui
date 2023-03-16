import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

interface MenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: (event: React.MouseEvent<any, MouseEvent>) => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
}

export const Menu: React.FC<MenuProps> = ({
  open,
  anchorEl,
  onClose,
  children,
  className,
  style,
  fullWidth,
}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [widthParent, setWidthParent] = useState(0);
  const menu = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (anchorEl && menu.current) {
      const clicked = anchorEl.getBoundingClientRect();
      const menuEl = menu.current.getBoundingClientRect();
      fullWidth && setWidthParent(clicked.width);
      console.log(widthParent);
      document.body.style.overflow = 'hidden';

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
        setHeight(clicked.y + clicked.height + 5);
      }
    }

    return () => {
      setHeight(0);
      setWidth(0);
      setWidthParent(0);
      document.body.style.overflow = '';
    };
  }, [anchorEl]);

  return (
    <>
      {open && (
        <div className="CuteMenuBackground" onClick={onClose}>
          <ul
            ref={menu}
            className={clsx('CuteMenu', className)}
            onClick={(e) => e.stopPropagation()}
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
