import React, { useEffect } from 'react';

interface PopupProps {
  variant?: 'base' | 'search';
  open: boolean;
  className?: string;
  onClose: any;
  children?: any;
  style?: React.CSSProperties;
}

export const Popup: React.FC<PopupProps> = ({
  open,
  onClose,
  children,
  style,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div>
      {open && (
        <div className="popup" onClick={onClose}>
          <div
            className="popupElement"
            onClick={(e) => e.stopPropagation()}
            style={style}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
