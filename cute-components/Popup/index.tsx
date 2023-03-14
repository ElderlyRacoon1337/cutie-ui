import React from 'react';

interface PopupProps {
  variant?: 'base' | 'search';
  open: boolean;
  className?: string;
  handleClose: any;
  children?: any;
  sx?: React.CSSProperties;
}

export const Popup: React.FC<PopupProps> = ({
  open,
  handleClose,
  children,
  sx,
}) => {
  return (
    <>
      {open && (
        <div className="popup" onClick={handleClose}>
          <div
            className="popupElement"
            onClick={(e) => e.stopPropagation()}
            style={sx}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
