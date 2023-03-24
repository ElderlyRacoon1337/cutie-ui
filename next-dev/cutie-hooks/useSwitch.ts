import { useState } from 'react';

export const useSwitch = (checked?: boolean) => {
  const [checkedSwitch, setCheckedSwitch] = useState(checked || false);

  const handleSwitch = (e: any) => {
    setCheckedSwitch(e.target.checked);
  };

  return {
    checkedSwitch,
    setCheckedSwitch,
    handleSwitch,
  };
};
