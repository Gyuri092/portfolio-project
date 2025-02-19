import '@/styles/experiencepage.scss';
import { ExperienceObjectType } from '@/types/types';
import contentsJson from './data/contents.json';
import { ExperienceContents } from './ExperienceContents/ExperienceContents';

export default function ExperiencePage() {
  const contentsArray: ExperienceObjectType[] = contentsJson.array;

  return (
    <div className="experience-page-container">
      <p className="experience-page-title">Experience</p>
      <div className="experience-page-middle-container">
        {contentsArray.map((object) => {
          return <ExperienceContents key={object.title} object={object} />;
        })}
      </div>
    </div>
  );
}
