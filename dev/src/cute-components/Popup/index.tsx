import clsx from 'clsx';
import React, { useEffect } from 'react';

interface PopupProps {
  open: boolean;
  className?: string;
  onClose: (event: React.MouseEvent<any, MouseEvent>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Popup: React.FC<PopupProps> = ({
  open,
  onClose,
  children,
  style,
  className,
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
    <>
      {open && (
        <div className="CutePopup" onClick={onClose}>
          <div
            className={clsx('CutePupupElement', className)}
            onClick={(e) => e.stopPropagation()}
            style={style}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
