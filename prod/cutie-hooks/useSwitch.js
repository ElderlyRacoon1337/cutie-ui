const { useState } = require('react');

const useSwitch = (checked) => {
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
module.exports = { useSwitch };
