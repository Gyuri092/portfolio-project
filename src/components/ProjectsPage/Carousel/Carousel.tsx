import ChevronLeftIcon from '@/icons/chevronLeft.svg';
import ChevronLeftGrayIcon from '@/icons/chevronLeftGray.svg';
import ChevronRightIcon from '@/icons/chevronRight.svg';
import ChevronRightGrayIcon from '@/icons/chevronRightGray.svg';
import '@/styles/carousel.scss';
import Image from 'next/image';
import { useState } from 'react';
import imageDataJson from './data/imageData.json';

const backgroundColors = [
  'mbtiDetectiveBg', // Example background colors
  'whiteBg',
  'billiGBg',
  'whiteBg',
];

export const Carousel = () => {
  const imageData = imageDataJson.array;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % imageData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex: number) =>
        (prevIndex - 1 + imageData.length) % imageData.length,
    );
  };

  return (
    <div className={`carousel-container ${backgroundColors[currentIndex]}`}>
      <div className="chevron-button-container">
        <button type="button" className="chevron-button" onClick={prevSlide}>
          {backgroundColors[currentIndex] === 'whiteBg' ? (
            <ChevronLeftGrayIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </button>
        <button type="button" className="chevron-button" onClick={nextSlide}>
          {backgroundColors[currentIndex] === 'whiteBg' ? (
            <ChevronRightGrayIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </button>
      </div>
      <div
        className="carousel-image-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {imageData.map((elem, index) => {
          return (
            <Image
              className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
              key={elem.title}
              src={elem.src}
              alt={elem.title}
              width={882}
              height={469}
            />
          );
        })}
      </div>
    </div>
  );
};
