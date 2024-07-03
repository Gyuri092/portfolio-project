import {
  carouselTransitionState,
  currentCarouselIndexState,
  currentIndexState,
  showModalState,
  stopIntervalState,
} from '@/recoil/atoms';
import Image from 'next/image';
import { useCallback, useEffect, useMemo } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
  imageSrcArray: string[];
  backgroundColors: string[];
}

export const CarouselImageContainer = (props: Props) => {
  const { imageSrcArray, backgroundColors } = props;
  const [, setShowModal] = useRecoilState(showModalState);
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);
  const [carouselTransition, setCarouselTransition] = useRecoilState(
    carouselTransitionState,
  );
  const [, setCurrentCarouselIndex] = useRecoilState(currentCarouselIndexState);
  const [stopInterval, setStopInterval] = useRecoilState(stopIntervalState);

  const controlTime = useMemo(() => {
    return carouselTransition === 'none' ? 10 : 3000;
  }, [carouselTransition]);

  const resetIndexAndTransition = useCallback(() => {
    setTimeout(() => {
      setCurrentIndex(0);
      setCarouselTransition('none');
    }, 10);
  }, [setCarouselTransition, setCurrentIndex]);

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
  }, [
    controlTime,
    currentIndex,
    imageSrcArray.length,
    resetIndexAndTransition,
    setCarouselTransition,
    setCurrentIndex,
    stopInterval,
  ]);

  const getCarouselStyles = () => {
    return {
      transform: `translateX(-${currentIndex * 100}%)`,
      transition: `${carouselTransition}`,
    };
  };

  return (
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
  );
};
