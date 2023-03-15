import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

interface MenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: any;
  children: any;
  className?: string;
  style?: React.CSSProperties;
}

export const Menu: React.FC<MenuProps> = ({
  open,
  anchorEl,
  onClose,
  children,
  className,
  style,
}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const menu = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (anchorEl && menu.current) {
      const clicked = anchorEl.getBoundingClientRect();
      const menuEl = menu.current.getBoundingClientRect();
      document.body.style.overflow = 'hidden';

      const rightOut = window.innerWidth - clicked.left - menuEl.width;

      if (rightOut < 0) {
        setWidth(clicked.x + rightOut - 10);
      } else {
        setWidth(clicked.x);
      }

      const bottomOut = window.innerHeight - clicked.top - menuEl.height - 50;
      console.log(bottomOut);
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
      document.body.style.overflow = '';
    };
  }, [anchorEl]);

  return (
    <>
      {open && (
        <div className="menuBackground" onClick={onClose}>
          <ul
            ref={menu}
            className={clsx('menu', className)}
            onClick={(e) => e.stopPropagation()}
            style={
              height == 0
                ? { visibility: 'hidden' }
                : {
                    ...style,
                    top: `${height}px`,
                    left: `${width}px`,
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
