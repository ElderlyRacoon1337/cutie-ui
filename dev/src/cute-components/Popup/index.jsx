import React from 'react';

export const Popup = ({ open, handleClose, children, sx }) => {
  return (
    <div>
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
    </div>
  );
};
