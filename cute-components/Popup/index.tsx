import React from 'react';

interface PopupProps {
  variant?: 'base' | 'search';
  open: boolean;
  className?: string;
  handleClose: any;
  children?: any;
  sx?: React.CSSProperties;
}

const Popup: React.FC<PopupProps> = ({ open, handleClose, children, sx }) => {
  return (
    <>
      {open && (
        <div className="popup" onClick={handleClose}>
          <div
            style={sx}
            className="popupElement"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
