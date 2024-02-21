import '@/styles/header.scss';
import LightModeIcon from '@/icons/lightMode.svg';
import DarkModeIcon from '@/icons/darkMode.svg';
import FullScreenIcon from '@/icons/fullScreen.svg';
import FullScreenIconInDarkMode from '@/icons/fullScreenInDarkMode.svg';
import { useState } from 'react';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="header-container">
      <div className="title">gyuri-portfolio</div>
      <div className="icon-container">
        <button
          type="button"
          className="icon"
          onClick={() => setIsDarkMode((prev) => !prev)}
        >
          {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
        <button type="button" className="icon">
          {isDarkMode ? <FullScreenIconInDarkMode /> : <FullScreenIcon />}
        </button>
      </div>
    </div>
  );
};
