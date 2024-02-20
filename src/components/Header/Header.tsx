import '../../styles/header.scss';
import DartModeIcon from '../../../public/icons/darkMode.svg';
import FullScreenIcon from '../../../public/icons/fullScreen.svg';

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
