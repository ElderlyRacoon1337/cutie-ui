import { useState } from 'react';

export const useAlert = () => {
  const [alertOpen, setAlertOpen] = useState(false);

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const handleClickAlert = () => {
    setAlertOpen(true);
  };

  return {
    alertOpen,
    handleCloseAlert,
    handleClickAlert,
    setAlertOpen,
  };
};
