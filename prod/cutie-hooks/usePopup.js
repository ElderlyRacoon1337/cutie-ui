const { useState } = require('react');

const usePopup = () => {
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
module.exports = { usePopup };
