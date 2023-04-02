const { useState } = require('react');

const useTabs = (initialValue) => {
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
module.exports = { useTabs };
