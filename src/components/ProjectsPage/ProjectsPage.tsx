import MediumIcon from '@/icons/medium.svg';
import ViewCarouselIcon from '@/icons/viewCarousel.svg';
import '@/styles/projectspage.scss';
import { useState } from 'react';
import { Carousel } from './Carousel/Carousel';
import { MediumThumnailList } from './MediumThumnailList/MediumThumnailList';

export const ProjectsPage = () => {
  const [viewCarousel, setViewCarousel] = useState(true);
  return (
    <div className="projects-page-container">
      <p className="projects-page-title">Projects</p>
      <div className="projects-page-button-container">
        <button type="button" onClick={() => setViewCarousel((prev) => !prev)}>
          {viewCarousel ? <MediumIcon /> : <ViewCarouselIcon />}
        </button>
      </div>
      {viewCarousel ? <Carousel /> : <MediumThumnailList />}
    </div>
  );
};
