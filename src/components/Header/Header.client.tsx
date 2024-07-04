import DarkModeIcon from '@/icons/darkMode.svg';
import FullScreenIcon from '@/icons/fullScreen.svg';
import FullScreenIconInDarkMode from '@/icons/fullScreenInDarkMode.svg';
import LightModeIcon from '@/icons/lightMode.svg';
import ZoomOutScreenIcon from '@/icons/zoomOutScreen.svg';
import ZoomOutScreenIconInDarkMode from '@/icons/zoomOutScreenDarkMode.svg';
import { darkModeState } from '@/recoil/atoms';
import '@/styles/header.scss';
import { RefObject, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function Header({
  containerRef,
}: {
  containerRef: RefObject<HTMLDivElement>;
}) {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [isFullScreen, setIsFullScreen] = useState(true);
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

  const toggleFullScreen = () => {
    if (!containerRef || !containerRef.current) return;
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  };

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
            toggleFullScreen();
          }}
        >
          {isFullScreen ? fullScreenIcon : zoomOutScreenIcon}
        </button>
      </div>
    </div>
  );
}
