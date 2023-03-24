import { useState } from 'react';

export const useTabs = (initialValue?: number) => {
  const [tabsValue, setTabsValue] = useState(initialValue || 1);

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };

  return {
    tabsValue,
    setTabsValue,
    handleChangeTabs,
  };
};
