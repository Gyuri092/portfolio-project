import { ExperienceObjectType } from '@/types/types';
import Image from 'next/image';

export const ExperienceContents = ({
  object,
}: {
  object: ExperienceObjectType;
}) => {
  return (
    <div className="experience-page-box">
      <div className="experience-page-contents">
        <div className="experience-page-image-box">
          <p className="experience-page-subtitle">{object.title}</p>
          <Image
            src={object.src}
            alt={`${object.title} screenshot`}
            width={object.size.width}
            height={object.size.height}
          />
        </div>
        <div className="experience-page-text">
          <p>{object.text}</p>
          <div className="experience-page-link-container">
            {object.link.map((elem) => (
              <a
                key={elem.name}
                href={elem.url}
                target="_blank"
                rel="noreferrer"
              >
                {elem.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
