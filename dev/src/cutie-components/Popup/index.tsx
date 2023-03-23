import clsx from 'clsx';
import React, { useEffect } from 'react';
import styles from './Popup.module.scss';

interface PopupProps {
  open: boolean;
  className?: string;
  onClose: (event: React.MouseEvent<any, MouseEvent>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  other?: object;
}

export const Popup: React.FC<PopupProps> = ({
  open,
  onClose,
  children,
  style,
  className,
  other,
}) => {
  const prevent = (ev: any) => ev.preventDefault();
  useEffect(() => {
    if (open) {
      document.addEventListener('wheel', prevent, { passive: false });
      // document.body.style.overflow = 'hidden';
    }
    return () => {
      // document.body.style.overflow = '';
      document.removeEventListener('wheel', prevent);
    };
  }, [open]);

  return (
    <>
      {open && (
        <div className={styles.CutePopup} onClick={onClose}>
          <div
            className={clsx(styles.CutePupupElement, className)}
            onClick={(e) => e.stopPropagation()}
            {...other}
            style={style}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
