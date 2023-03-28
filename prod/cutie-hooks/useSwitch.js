import { useState } from 'react';

export const useSwitch = (checked) => {
  const [checkedSwitch, setCheckedSwitch] = useState(checked || false);
  const handleSwitch = (e) => {
    setCheckedSwitch(e.target.checked);
  };
  return {
    checkedSwitch,
    setCheckedSwitch,
    handleSwitch,
  };
};
