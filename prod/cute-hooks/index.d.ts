import React from 'react';

interface UseMenuReturnType {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClick: (event: React.MouseEvent<any>) => void;
  handleClose: (event: React.MouseEvent<any>) => void;
}

interface UsePopupReturnType {
  open: boolean;
  handleClick: (event: React.MouseEvent<any>) => void;
  handleClose: (event: React.MouseEvent<any>) => void;
}

export const useMenu: () => UseMenuReturnType;

export const usePopup: () => UsePopupReturnType;
