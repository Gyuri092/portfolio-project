import ProjectsModal from '@/components/Modal/ProjectsModal';
import MediumIcon from '@/icons/medium.svg';
import MediumIconInDarkMode from '@/icons/mediumInDarkMode.svg';
import ViewCarouselIcon from '@/icons/viewCarousel.svg';
import ViewCarouselIconInDarkMode from '@/icons/viewCarouselInDarkMode.svg';
import {
  darkModeState,
  showProjectsModalState,
  stopIntervalState,
} from '@/recoil/atoms';
import '@/styles/projectspage.scss';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import Carousel from './Carousel/Carousel';
import MediumThumnailList from './MediumThumnailList/MediumThumnailList';

export default function ProjectsPage() {
  const [viewCarousel, setViewCarousel] = useState(true);
  const darkMode = useRecoilValue(darkModeState);
  const showProjectsModal = useRecoilValue(showProjectsModalState);
  const [, setStopInterval] = useRecoilState(stopIntervalState);

  const mediumIcon = darkMode ? <MediumIconInDarkMode /> : <MediumIcon />;
  const viewCarouselIcon = darkMode ? (
    <ViewCarouselIconInDarkMode />
  ) : (
    <ViewCarouselIcon />
  );
  return (
    <div className="projects-page-container">
      <p className="projects-page-title">Projects</p>
      <div className="projects-page-button-container">
        <button
          type="button"
          onClick={() => {
            setViewCarousel((prev) => !prev);
            if (!viewCarousel) {
              setStopInterval(false);
            }
          }}
        >
          {viewCarousel ? mediumIcon : viewCarouselIcon}
        </button>
      </div>
      {viewCarousel ? <Carousel /> : <MediumThumnailList />}
      {showProjectsModal && createPortal(<ProjectsModal />, document.body)}
    </div>
  );
}
