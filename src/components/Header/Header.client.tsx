import DarkModeIcon from '@/icons/darkMode.svg';
import FullScreenIcon from '@/icons/fullScreen.svg';
import FullScreenIconInDarkMode from '@/icons/fullScreenInDarkMode.svg';
import LightModeIcon from '@/icons/lightMode.svg';
import ZoomOutScreenIcon from '@/icons/zoomOutScreen.svg';
import ZoomOutScreenIconInDarkMode from '@/icons/zoomOutScreenDarkMode.svg';
import { darkModeState } from '@/recoil/atoms';
import '@/styles/header.scss';
import { useState } from 'react';
import { FullScreenHandle } from 'react-full-screen';
import { useRecoilState } from 'recoil';

export const Header = (props: { handle: FullScreenHandle }) => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [isFullScreen, setIsFullScreen] = useState(true);
  const { handle } = props;
  const fullScreenIcon = darkMode ? (
    <FullScreenIconInDarkMode />
  ) : (
    <FullScreenIcon />
  );
  const zoomOutScreenIcon = darkMode ? (
    <ZoomOutScreenIconInDarkMode />
  ) : (
    <ZoomOutScreenIcon />
  );
  return (
    <div className={`${darkMode ? 'darkmode' : 'lightmode'} header-container`}>
      <div className={`${darkMode ? 'darkmode' : 'lightmode'} title`}>
        gyuri-portfolio
      </div>
      <div className="icon-container">
        <button
          type="button"
          className="icon"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
        <button
          type="button"
          className="icon"
          onClick={() => {
            setIsFullScreen((prev) => !prev);
            return isFullScreen ? handle.enter() : handle.exit();
          }}
        >
          {isFullScreen ? fullScreenIcon : zoomOutScreenIcon}
        </button>
      </div>
    </div>
  );
};
