import { useState } from 'react';

export const useTabs = (initialValue) => {
  const [tabsValue, setTabsValue] = useState(initialValue || 1);
  const handleChangeTabs = (event, newValue) => {
    setTabsValue(newValue);
  };
  return {
    tabsValue,
    setTabsValue,
    handleChangeTabs,
  };
};
