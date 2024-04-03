import DarkModeIcon from '@/icons/darkMode.svg';
import FullScreenIcon from '@/icons/fullScreen.svg';
import FullScreenIconInDarkMode from '@/icons/fullScreenInDarkMode.svg';
import LightModeIcon from '@/icons/lightMode.svg';
import { darkModeState } from '@/recoil/atoms';
import '@/styles/header.scss';
import { useRecoilState } from 'recoil';

export const Header = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  return (
    <div className="header-container">
      <div className="title">gyuri-portfolio</div>
      <div className="icon-container">
        <button
          type="button"
          className="icon"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
        <button type="button" className="icon">
          {darkMode ? <FullScreenIconInDarkMode /> : <FullScreenIcon />}
        </button>
      </div>
    </div>
  );
};
