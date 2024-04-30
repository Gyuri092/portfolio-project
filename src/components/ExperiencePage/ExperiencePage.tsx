import '@/styles/experiencepage.scss';
import Image from 'next/image';
import contentsJson from './data/contents.json';

export const ExperiencePage = () => {
  const contentsArray = contentsJson.array;

  return (
    <div className="experience-page-container">
      {contentsArray.map((object) => {
        return (
          <div key={object.title} className="experience-page-box">
            <p className="experience-page-title">Experience</p>
            <p className="experience-page-subtitle">{object.title}</p>
            <div className="experience-page-contents">
              <Image
                src={object.src}
                alt={`${object.title} screenshot`}
                width={object.size.width}
                height={object.size.height}
              />
              <div className="experience-page-text">
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
                <p>{object.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
