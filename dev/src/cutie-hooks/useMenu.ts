import { useState } from 'react';

export const useMenu = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const menuOpen = Boolean(menuAnchorEl);
  const handleClickMenu = (event: any) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  return {
    menuAnchorEl,
    menuOpen,
    handleClickMenu,
    handleCloseMenu,
    setMenuAnchorEl,
  };
};
