import React, { useCallback, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeChanger from './ThemeChanger';

import './ThemeButton.css';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

type ThemeButtonProps = {
  onClick?: () => void
}

const ThemeButton: React.FC<ThemeButtonProps> = ({onClick}) => {
  const [theme, setTheme] = useState(ThemeChanger.apply())

  const toggleTheme = useCallback(() => {
    if (onClick) onClick();
    setTheme(ThemeChanger.toggleTheme());
  }, [onClick])

  return (
    <FontAwesomeIcon
      icon={faAdjust}
      className={`${theme} change-theme`}
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
