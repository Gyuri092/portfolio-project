import '@/styles/projectspage.scss';
import { Carousel } from './Carousel/Carousel';

export const ProjectsPage = () => {
  return (
    <div className="projects-page-container">
      <p className="projects-page-title">Projects</p>
      <Carousel />
    </div>
  );
};
