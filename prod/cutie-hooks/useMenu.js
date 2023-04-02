const { useState } = require('react');

const useMenu = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const menuOpen = Boolean(menuAnchorEl);
  const handleClickMenu = (event) => {
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
module.exports = { useMenu };
