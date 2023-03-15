import React, { useEffect, useRef, useState } from 'react';

export const Menu = ({
  open,
  anchorEl,
  handleClose,
  children,
  className,
  sx,
}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const menu = useRef(null);

  useEffect(() => {
    if (anchorEl) {
      const b = anchorEl.getBoundingClientRect();
      setHeight(b.y + b.height + 5);
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
