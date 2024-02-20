import '@/styles/header.scss';
import DartModeIcon from '@/icons/darkMode.svg';
import FullScreenIcon from '@/icons/fullScreen.svg';

export const Header = () => {
  return (
    <div className="header-container">
      <div className="title">gyuri-portfolio</div>
      <div>
        <DartModeIcon />
        <FullScreenIcon />
      </div>
    </div>
  );
};
