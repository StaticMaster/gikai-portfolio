import React from 'react';
import { useDarkMode } from './DarkModeContext';

const DarkModeSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <input
        type="checkbox"
        id="darkmode-toggle"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="darkmode-toggle"></label>
    </div>
  );
};

export default DarkModeSwitch;