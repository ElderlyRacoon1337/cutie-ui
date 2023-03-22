import React from 'react';

interface UseAlertReturnType {
  alertOpen: boolean;
  handleClickAlert: (event: React.MouseEvent<any>) => void;
  handleCloseAlert: (event: React.MouseEvent<any>) => void;
  setAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UseMenuReturnType {
  menuAnchorEl: null | HTMLElement;
  menuOpen: boolean;
  handleClickMenu: (event: React.MouseEvent<any>) => void;
  handleCloseMenu: (event: React.MouseEvent<any>) => void;
  setMenuAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
}

interface UsePopupReturnType {
  popupOpen: boolean;
  handleClickPopup: (event: React.MouseEvent<any>) => void;
  handleClosePopup: (event: React.MouseEvent<any>) => void;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UseSwitchReturnType {
  checkedSwitch: boolean;
  handleSwitch: (event: any) => void;
  setCheckedSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UseTabsReturnType {
  tabsValue: number;
  setTabsValue: React.Dispatch<React.SetStateAction<number>>;
  handleChangeTabs: (event: React.SyntheticEvent, newValue: number) => void;
}

export const useAlert: () => UseAlertReturnType;
export const useMenu: () => UseMenuReturnType;
export const usePopup: () => UsePopupReturnType;
export const useSwitch: (checked?: boolean) => UseSwitchReturnType;
export const useTabs: (initialValue?: number) => UseTabsReturnType;
