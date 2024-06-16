import ChevronLeftIcon from '@/icons/chevronLeft.svg';
import ChevronLeftGrayIcon from '@/icons/chevronLeftGray.svg';
import ChevronRightIcon from '@/icons/chevronRight.svg';
import ChevronRightGrayIcon from '@/icons/chevronRightGray.svg';
import {
  currentCarouselIndexState,
  showModalState,
  stopIntervalState,
} from '@/recoil/atoms';
import '@/styles/carousel.scss';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import imageDataJson from './data/imageData.json';

const backgroundColors = [
  'mbtiDetectiveBg',
  'whiteBg',
  'billiGBg',
  'whiteBg',
  'mbtiDetectiveBg',
];

export const Carousel = () => {
  const imageData = imageDataJson.array;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselTransition, setCarouselTransition] = useState('');
  const [stopInterval, setStopInterval] = useRecoilState(stopIntervalState);
  const [, setShowModal] = useRecoilState(showModalState);
  const [, setCurrentCarouselIndex] = useRecoilState(currentCarouselIndexState);

  const imageSrcArray = useMemo(() => {
    return [...imageData, imageData[0]] as string[];
  }, [imageData]);

  const controlTime = useMemo(() => {
    return carouselTransition === 'none' ? 10 : 3000;
  }, [carouselTransition]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length,
    );
  };

  const getCarouselStyles = () => {
    return {
      transform: `translateX(-${currentIndex * 100}%)`,
      transition: `${carouselTransition}`,
    };
  };

  const resetIndexAndTransition = () => {
    setTimeout(() => {
      setCurrentIndex(0);
      setCarouselTransition('none');
    }, 10);
  };

  const getButtonClassName = (index: number) => {
    const initialClassName = 'circle-index-button';
    const isActive =
      index === (currentIndex === imageSrcArray.length - 1 ? 0 : currentIndex)
        ? 'active'
        : '';
    const isWhiteBackgroud =
      backgroundColors[currentIndex] === 'whiteBg' ? 'whiteBg' : '';
    return [initialClassName, isActive, isWhiteBackgroud].join(' ');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (stopInterval) {
        return;
      }
      if (currentIndex === imageSrcArray.length - 1) {
        resetIndexAndTransition();
      }
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrcArray.length);
      setCarouselTransition('transform 0.5s ease-in-out');
    }, controlTime);

    return () => clearInterval(timer);
  }, [controlTime, currentIndex, imageSrcArray.length, stopInterval]);

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
      <div className="carousel-image-container" style={getCarouselStyles()}>
        {imageSrcArray.map((elem, index) => {
          const title = elem.split('\n')[0] as string;
          const src = elem.split('\n')[1] as string;
          return (
            <div key={`${index - 0}`} className="carousel-image-box">
              <p
                className={`carousel-image-title ${backgroundColors[currentIndex] === 'billiGBg' ? 'billiGBg' : ''}`}
              >
                {title}
              </p>
              <Image
                className="carousel-image"
                src={src}
                alt={title}
                width={882}
                height={469}
              />
              <button
                type="button"
                className="carousel-image-button"
                onClick={() => {
                  setShowModal((prev) => !prev);
                  setCurrentCarouselIndex(currentIndex);
                  setStopInterval((prev) => !prev);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="circle-index-button-container">
        {imageSrcArray.map((elem, index) => {
          const title = elem.split('\n')[0] as string;
          if (index === imageSrcArray.length - 1) return null;
          return (
            <button
              className={getButtonClassName(index)}
              type="button"
              key={title}
              onClick={() => setCurrentIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};
