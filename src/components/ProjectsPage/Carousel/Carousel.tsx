import ChevronLeftIcon from '@/icons/chevronLeft.svg';
import ChevronLeftGrayIcon from '@/icons/chevronLeftGray.svg';
import ChevronRightIcon from '@/icons/chevronRight.svg';
import ChevronRightGrayIcon from '@/icons/chevronRightGray.svg';
import { currentCarouselIndexState, showModalState } from '@/recoil/atoms';
import '@/styles/carousel.scss';
import Image from 'next/image';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import imageDataJson from './data/imageData.json';

const backgroundColors = ['mbtiDetectiveBg', 'whiteBg', 'billiGBg', 'whiteBg'];

export const Carousel = () => {
  const imageData = imageDataJson.array;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setShowModal] = useRecoilState(showModalState);
  const [, setCurrentCarouselIndex] = useRecoilState(currentCarouselIndexState);

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
        {imageData.map((elem) => {
          return (
            <div key={elem.title} className="carousel-image-box">
              <p
                className={`carousel-image-title ${backgroundColors[currentIndex] === 'billiGBg' ? 'billiGBg' : ''}`}
              >
                {elem.title}
              </p>
              <Image
                className="carousel-image"
                src={elem.src}
                alt={elem.title}
                width={882}
                height={469}
              />
              <button
                type="button"
                className="carousel-image-button"
                onClick={() => {
                  setShowModal((prev) => !prev);
                  setCurrentCarouselIndex(currentIndex);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="circle-index-button-container">
        {imageData.map((elem, index) => (
          <button
            className={`circle-index-button ${index === currentIndex ? 'active' : ''} ${backgroundColors[currentIndex] === 'whiteBg' ? 'whiteBg' : ''}`}
            type="button"
            key={elem.title}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
