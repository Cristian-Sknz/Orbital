import React, { useCallback, useState } from 'react';

import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import ThemeChanger from './ThemeChanger';

import './ThemeButton.css';

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
    <Icon icon={['fas', 'adjust']}
      className={`${theme} change-theme`}
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
