import { useState } from 'react';

export const usePopup = () => {
  const [popupOpen, setOpenPopup] = useState(false);
  const handleClickPopup = () => {
    setOpenPopup(true);
  };
  const handleClosePopup = () => {
    setOpenPopup(false);
  };
  return {
    popupOpen,
    handleClickPopup,
    handleClosePopup,
    setOpenPopup,
  };
};
