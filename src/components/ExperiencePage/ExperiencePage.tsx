import ChevronLeftIcon from '@/icons/chevronLeft.svg';
import ChevronLeftGrayIcon from '@/icons/chevronLeftGray.svg';
import ChevronRightIcon from '@/icons/chevronRight.svg';
import ChevronRightGrayIcon from '@/icons/chevronRightGray.svg';
import { darkModeState } from '@/recoil/atoms';
import '@/styles/experiencepage.scss';
import { ExperienceObjectType } from '@/types/types';
import Image from 'next/image';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import contentsJson from './data/contents.json';

export default function ExperiencePage() {
  const contentsArray: ExperienceObjectType[] = contentsJson.array;
  const [currentIndex, setCurrentIndex] = useState(0);
  const darkMode = useRecoilValue(darkModeState);

  const getCarouselStyles = () => {
    return {
      transform: `translateX(-${currentIndex * 100}%)`,
      transition: 'transform 0.5s ease-in-out',
    };
  };

  return (
    <div className="experience-page-container">
      <p className="experience-page-title">Experience</p>
      <div className="experience-page-middle-container">
        <div className="experience-chevron-button-container">
          <button
            type="button"
            className="chevron-button"
            onClick={() =>
              setCurrentIndex(
                (prev) =>
                  (prev - 1 + contentsArray.length) % contentsArray.length,
              )
            }
          >
            {darkMode ? <ChevronLeftIcon /> : <ChevronLeftGrayIcon />}
          </button>
          <button
            type="button"
            className="chevron-button"
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % contentsArray.length)
            }
          >
            {darkMode ? <ChevronRightIcon /> : <ChevronRightGrayIcon />}
          </button>
        </div>
        {contentsArray.map((object) => {
          return (
            <div
              key={object.title}
              className="experience-page-box"
              style={getCarouselStyles()}
            >
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
    </div>
  );
}
