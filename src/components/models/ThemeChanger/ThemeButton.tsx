import React, { useCallback, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeChanger from './ThemeChanger';

import './ThemeButton.css';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

const ThemeButton: React.FC = () => {
  const [theme, setTheme] = useState(ThemeChanger.apply())

  const toggleTheme = useCallback(() => {
    setTheme(ThemeChanger.toggleTheme());
  }, [])

  return (
    <FontAwesomeIcon
      icon={faAdjust}
      className={`${theme} change-theme`}
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
