import React, { useEffect, useRef, useState } from 'react';

interface MenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: any;
  children: any;
  className?: string;
  sx?: React.CSSProperties;
}

export const Menu: React.FC<MenuProps> = ({
  open,
  anchorEl,
  handleClose,
  children,
  className,
  sx,
}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const menu = useRef<any>(null);

  useEffect(() => {
    if (anchorEl) {
      const b = anchorEl.getBoundingClientRect();
      setHeight(b.y + menu.current.clientHeight / 2 + 5);
      setWidth(b.x);
    }

    return () => {
      setHeight(0);
      setWidth(0);
    };
  }, [anchorEl]);

  return (
    <>
      {open && (
        <div className="menuBackground" onClick={handleClose}>
          <ul
            ref={menu}
            className={`${className} menu`}
            onClick={(e) => e.stopPropagation()}
            style={
              height == 0
                ? { visibility: 'hidden' }
                : { ...sx, top: `${height}px`, left: `${width}px` }
            }
          >
            {children}
          </ul>
        </div>
      )}
    </>
  );
};
